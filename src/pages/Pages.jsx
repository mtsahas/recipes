import Home from "./Home";
import Recipe from "../components/Recipe";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// contains all pages
function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
