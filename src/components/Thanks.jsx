import recipes from "../public/recipes.json"
import styled from "styled-components"

function Thanks() {
  return (
    <Wrapper>
    <h3>Thanksgiving Recipes</h3>
    <ul>
      {recipes.map((recipe, index) => (
        // <li key={index}>
        //   <h2>{recipe.title}</h2>
        // </li>
        <Card key={index}>
                <p>{recipe.title}</p>
        </Card>

      ))}
    </ul>
  </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 4rem 2rem;
    color: orange;
    border: 2px solid black;
    
`;

const Card = styled.div`
    max-width: 15rem;
    min-height: 15rem;
    border-radius: 2rem;
    background-color: blue;
`;
export default Thanks

