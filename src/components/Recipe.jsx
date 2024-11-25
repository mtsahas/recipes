import recipes from "../public/recipes.json";
import { useParams } from "react-router-dom";
import CurrentDate from "./CurrentDate";

function Recipe() {
  const { id } = useParams();
  const recipe = id < recipes.length ? recipes[id] : recipes[0];

  return (
    <div className="newspaper">
      <a className="back-button" href="/">
        {" "}
        Return home{" "}
      </a>
      <header>
        <h2 className="headline">Breaking News: {recipe.title}</h2>
        <CurrentDate />
      </header>
      <main>
        <div className="subpage-article">
          <div className="recipe-column">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-column">
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
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