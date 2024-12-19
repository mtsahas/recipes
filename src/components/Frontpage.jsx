import recipes from "../assets/recipes.json";
import CurrentDate from "./CurrentDate";
import { Link } from "react-router-dom";
import FallingLeaves from "./FallingLeaves";

function Frontpage() {
  return (
    <>
      <FallingLeaves />
      <div className="newspaper">
        <header>
          <h1>The Daily News</h1>
          <CurrentDate />
        </header>
        <main>
          <article className="main-article">
            <h2>Headline Story: Thanksgiving at the Tsahas Residence</h2>
            <p>
              On Thursday, November 28th 2024, the Tsahas family hosted their
              annual Thanksgiving dinner, filled with delicious eats and drinks.
              Catch an exclusive look at the menu below!
            </p>
          </article>

          <section className="columns">
            {recipes.map((recipe, index) => (
              <Link className="article-link" to={`/recipes/${recipe.id}`}>
                <article key={index}>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                </article>
              </Link>
            ))}
          </section>
        </main>
        <footer>
          <p>&copy; 2024 The Daily News</p>
        </footer>
        <a
          href="https://www.flaticon.com/free-icons/maple-leaf"
          title="maple leaf icons"
        >
          Maple leaf icons created by max.icons - Flaticon
        </a>
      </div>
    </>
  );
}

export default Frontpage;
