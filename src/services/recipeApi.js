const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";
const cache = new Map();

export const recipeApi = {
  searchByName: async (name) => {
    const cacheKey = `search-${name}`;
    
    if (cache.has(cacheKey)) {
      console.log("✅ From Cache:", cacheKey);
      return cache.get(cacheKey);
    }

    try{ 
        const response=await fetch(`${API_BASE_URL}/search.php?s=${name}`); 
        const data =await response.json(); 
        const result=data.meals || []; 
        cache.set(cacheKey,result) 
        return result; 
    }catch(error){ 
        console.error("Error search recipes:", error); 
        return []; 
    }
  },

  getRandomRecipes: async (count=8)=>{
    const cacheKey = `random-${count}`;
    
    if (cache.has(cacheKey)) {
      console.log("✅ From Cache:", cacheKey);
      return cache.get(cacheKey);
    }

    try{ 
        const promises=Array.from({length : count}, ()=>{
           return fetch(`${API_BASE_URL}/random.php`).then((res)=>res.json());
        });

        const results=await Promise.all(promises);
        const meal=results.map((result)=>result.meals[0]).filter(Boolean);
        cache.set(cacheKey,meal);
        return meal;
    }catch(error){ 
        console.error("Error search recipes:", error); 
        return []; 
    }
  },

//   get recipe by id
getRecipesById: async (id) => {
    const cacheKey = `search-${id}`;
    
    if (cache.has(cacheKey)) {
      console.log("✅ From Cache:", cacheKey);
      return cache.get(cacheKey);
    }

    try{ 
        const response=await fetch(`${API_BASE_URL}/lookup.php?i=${id}`); 
        const data =await response.json(); 
        const result=data.meals ? data.meals[0] : null; 
        cache.set(cacheKey,result) 
        return result; 
    }catch(error){ 
        console.error("Error search recipes:", error); 
        return []; 
    }
  },

//   recipes of all cateogries
getRecipesByCategory: async () => {
    const cacheKey = 'categories';
    
    if (cache.has(cacheKey)) {
      console.log("✅ From Cache:", cacheKey);
      return cache.get(cacheKey);
    }

    try{ 
        const response=await fetch(`${API_BASE_URL}/categories.php`); 
        const data =await response.json(); 
        const result=data.meals || []; 
        cache.set(cacheKey,result) 
        return result; 
    }catch(error){ 
        console.error("Error search recipes:", error); 
        return []; 
    }
  },

  getByCategory: async (category)=>{
    const cacheKey = `category-${category}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    try{ 
        const response=await fetch(`${API_BASE_URL}/filter.php?c=${category}`); 
        const data =await response.json(); 
        const result=data.meals || []; 
        cache.set(cacheKey,result) 
        return result; 
    }catch(error){ 
        console.error("Error search recipes:", error); 
        return []; 
    }

  }
};


export const transformRecipes=(apiRecipes)=>{
    if (!apiRecipes) return null;

    const ingredients=[];

    for(let i=1;i<20;i++){
      const ingredient=apiRecipes[`strIngredient${i}`];
      const measure=apiRecipes[`strMeasure${i}`];

      if(ingredient && ingredient.trim()){
        ingredients.push(`${measure?measure.trim()+" ":""}${ingredient.trim()}`);
      }
    }

      //split instructions into steps
      const instructions=apiRecipes.strInstructions
      ? apiRecipes.strInstructions.split(/\r?\n/).filter(steps=>steps.trim()):[];

      const estimatePrepTime=Math.floor(Math.random()*15)+5;
      const estimateCookTime=Math.floor(Math.random()*25)+10;
      
      let category='dinner';
      const mealCategory=apiRecipes.strCategory?.toLowerCase() || "";

      if(mealCategory.includes('breakfast') || mealCategory.includes('dessert')){
        category=mealCategory.includes('breakfast')?'breakfast':'dessert';
      }else if(
        mealCategory.includes('side') || mealCategory.includes('starter')
      ){
        category='lunch';
     }

     return {
      id: apiRecipes.idMeal,
      title: apiRecipes.strMeal,
      description: `Delicious ${apiRecipes.strMeal} from 
      ${apiRecipes.strArea || 'international'} cuisine`,
      category,
      image:apiRecipes.strMealThumb,
      prepTime: estimatePrepTime,
      cookTime: estimateCookTime,
      servings: Math.floor(Math.random()*4)+2,
      difficulty: estimateCookTime > 25 ?"medium" : "easy",
      ingredients,
      instructions,
      tags:[
        apiRecipes.strArea?.toLowerCase(),
        apiRecipes.strCategory?.toLowerCase(),
        "api_recipes"
      ].filter(Boolean)
    }
    
}


