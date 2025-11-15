import { useEffect, useState } from "react";
import { recipeApi, transformRecipes } from "../services/recipeApi";

export const UseRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomRecipes = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiRecipes = await recipeApi.getRandomRecipes(8);
      const transformRecipesApi = apiRecipes
        .map(transformRecipes)
        .filter(Boolean);
      setRecipes(transformRecipesApi);
    } catch (error) {
      setError("failed to fetch recipes");
      console.error("failed to fetch recipes", error);
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async (searchTerm) => {
    if (!searchTerm.trim()) {
      await fetchRandomRecipes();
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const apiRecipes = await recipeApi.searchByName(searchTerm);
      const transformRecipesApi = apiRecipes
        .map(transformRecipes)
        .filter(Boolean);

      setRecipes(transformRecipesApi);
    } catch (error) {
      setError("Failed to fetch recipes");
      console.error("failed to fetch", error);
    } finally {
      setLoading(false);
    }
  };

   const fetchRecipesByCategory = async (category) => {
   
    try {
      setLoading(true);
      setError(null);

      const apiRecipes = await recipeApi.getByCategory(category);
      const deatiledRecipes= await Promise.all(
        apiRecipes.slice(0,8).map(async (recipe)=>{
            const detailed= await recipeApi.getRecipesById(recipe.idMeal);
            return transformRecipes(detailed);
        })
      );

      setRecipes(deatiledRecipes.filter(Boolean));
    } catch (error) {
      setError("Failed to fetch recipes");
      console.error("failed to fetch", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchRandomRecipes();
  }, [])

  return {recipes, loading, error ,searchRecipes, fetchRecipesByCategory,
            reFetch : fetchRandomRecipes
  };
};
