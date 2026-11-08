export default function RecipeCard({ recipe, onselect }) {
  return (
    <div
      className="recipe-card"
      onClick={() => onselect(recipe.idMeal)}
      style={{ cursor: "pointer" }}
    >
      <h2>{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{
          width: "250px",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <p>Click to view the full recipe</p>
    </div>
  );
}
