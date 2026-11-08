export default function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="card">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <h3>Category</h3>
      <p>{recipe.strCategory}</p>

      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>

      <h3>Ingredients</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key) => {
            const i = key.replace("strIngredient", "");
            return (
                <li key={key}>
                    {recipe[key]} - {recipe[`strMeasure${i}`]}
                </li>
            )
            
          })}
      </ul>

      <button onClick={onBack}>Back</button>
    </div>
  );
}
