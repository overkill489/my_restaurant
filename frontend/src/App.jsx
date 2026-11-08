import { useState } from "react";
import axios from "axios";

import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";

const API = "http://localhost:3002/api/recipes";

export default function App() {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("ingredient");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function getRandomRecipe() {
    setLoading(true);
    setError("");
    setSelectedRecipe(null);

    try {
      const res = await axios.get(`${API}/random`);
      setSelectedRecipe(res.data);
    } catch (err) {
      setError("Failed to fetch a random recipe.");
    } finally {
      setLoading(false);
    }
  }

  async function searchRecipes(e) {
    e.preventDefault();

    if (!search.trim()) return;

    setLoading(true);
    setError("");
    setRecipes([]);
    setSelectedRecipe(null);
    setHasSearched(true);

    try {
      const res = await axios.get(`${API}/search`, {
        params: {
          query: search.trim(),
          type: searchType,
        },
      });

      setRecipes(res.data || []);
    } catch (err) {
      setError("Failed to search recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function viewRecipe(id) {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get(`${API}/${id}`);
      setSelectedRecipe(res.data);
    } catch (err) {
      setError("Failed to load recipe details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Recipe Remix</h1>

      <form onSubmit={searchRecipes}>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="ingredient">Search by Ingredient</option>
          <option value="name">Search by Recipe Name</option>
        </select>

        <input
          type="text"
          placeholder={
            searchType === "ingredient"
              ? "Enter an ingredient..."
              : "Enter a recipe name..."
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          Search
        </button>

        <button type="button" onClick={getRandomRecipe} disabled={loading}>
          Random Recipe
        </button>
      </form>

      {loading && <p>Loading Recipes...</p>}

      {error && <p role="alert">{error}</p>}

      {selectedRecipe && !loading && (
        <RecipeDetail
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}

      {!selectedRecipe && !loading && recipes.length > 0 && (
        <div className="recipe-list">
          {recipes.map((meal) => (
            <RecipeCard key={meal.idMeal} recipe={meal} onselect={viewRecipe} />
          ))}
        </div>
      )}

      {!selectedRecipe &&
        !loading &&
        !error &&
        hasSearched &&
        recipes.length === 0 && (
          <p>No recipes found. Try a different search!</p>
        )}
    </div>
  );
}
