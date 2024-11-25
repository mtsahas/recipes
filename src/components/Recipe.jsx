import recipes from "../public/recipes.json";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const recipe = id < recipes.length ? recipes[id] : recipes[0];

  console.log(recipe);

  return (
    <div className="newspaper">
      <a className="back-button" href="/">
        {" "}
        Back{" "}
      </a>
      <header>
        <h1 className="headline">Breaking News: {recipe.title}</h1>
        <p className="subheadline">By Jane Doe | November 23, 2024</p>
      </header>
      <main>
        <div className="subpage-article">
          <div className="recipe-column">
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-column">
            {recipe.steps.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <p>© 2024 Daily News. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Recipe;
