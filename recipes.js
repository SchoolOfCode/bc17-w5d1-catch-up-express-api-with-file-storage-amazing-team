import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes(req, res) {
    try{
        const recipesData = await fs.readFile('recipes.json');
        const recipes = JSON.parse(recipesData);
        console.log(recipes);
        res.json([{
            success: true,
            payload: recipes
        }]);
    } catch (error){
        console.error('ERROR', error);
        res.status(500).json({
            success: false,
            error : 'Failed to GET'
        })
    }
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    const recipesData = await fs.readFile('recipes.json');
    const recipes = JSON.parse(recipesData);
    return recipes.find(recipes => recipes.id === id);
}


// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
