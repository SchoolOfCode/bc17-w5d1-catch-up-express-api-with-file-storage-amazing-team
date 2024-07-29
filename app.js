import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 8080;

app.use(express.static("public"));
app.use(express.json());

app.get('/api/recipes', getRecipes);
app.get('api/recipes/:id', getRecipeByID)
app.post('api/recipes', createRecipe)
app.patch('/api/recipes', updateRecipeByID)
app.delete('/api/recipes', deleteRecipeByID)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
