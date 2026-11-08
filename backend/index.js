import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

const API = "https://www.themealdb.com/api/json/v1/1";

app.get("/api/recipes/random", async (req, res) => {
  try {
    const result = await axios.get(`${API}/random.php`);
    const meal = result.data.meals[0];
    res.json(meal);
  } catch (error) {
    console.error("Error fetching random recipe:", error);
    res.status(500).json({ error: "Failed to fetch random recipe" });
  }
});

app.get("/api/recipes/search", async (req, res) => {
  const query = String(req.query.query || "").trim();
  const type = req.query.type || "ingredient";

  if (!query) {
    return res.status(400).json({
      error: "Please enter a search term",
    });
  }

  if (!["ingredient", "name"].includes(type)) {
    return res.status(400).json({
      error: "Invalid search type",
    });
  }

  try {
    const endpoint = type === "ingredient" ? "filter.php" : "search.php";

    const params = type === "ingredient" ? { i: query } : { s: query };

    const result = await axios.get(`${API}/${endpoint}`, {
      params,
    });

    res.json(result.data.meals || []);
  } catch (error) {
    console.error("Error searching recipes:", error.message);

    res.status(500).json({
      error: "Failed to search recipes",
    });
  }
});

app.get("/api/recipes/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await axios.get(`${API}/lookup.php?i=${id}`);
    const meal = result.data.meals ? result.data.meals[0] : null;
    if (!meal) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.json(meal);
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    res.status(500).json({ error: "Failed to fetch recipe by ID" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
