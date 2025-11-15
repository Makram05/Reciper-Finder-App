import { RefreshCw } from "lucide-react"
import Filterbar from "../components/Filterbar"
import RecipesGrid from "../components/RecipesGrid"
import RecipeModel from "../components/RecipeModel"
import { UseRecipes } from "../hook/UseRecipes"
import { useMemo,useState } from "react"

const RecipesPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrepTime, setMaxPrepTime] = useState(30);
  const [maxCookTime, setMaxCookTime] = useState(30);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    recipes,
    loading,
    error,
    searchRecipes,
    fetchRecipesByCategory,
    reFetch
  } = UseRecipes();

  const filteredRecipes = useMemo(() => {
  return recipes.filter((recipe) => {
    const matchPrepTime = recipe.prepTime <= maxPrepTime;
    const matchCookTime = recipe.cookTime <= maxCookTime;

    return matchPrepTime && matchCookTime;
  });
}, [recipes, maxPrepTime, maxCookTime]);



    const handleSearch =async (term)=> {
      if (term.trim()) {
        await searchRecipes(term);
      } else {
        await reFetch();
      }
      setSearchTerm(term);
    }

    const onChangeCategory = async (category) => {
      setSelectedCategory(category);

      if (category.trim()) {
        await fetchRecipesByCategory(category);
      } else {
        await reFetch();
      }
    }

    const handleViewRecipe = (recipe) => {
      setSelectedRecipe(recipe);
      setIsModalOpen(true);
    }

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedRecipe(null);
    }



    return (
      <div className="min-h-screen bg-light-neutral-200">
        <div className="container mx-auto text-center py-12 px-4">
          <h1 className="text-4xl lg:text-7xl font-bold text-primary mb-8">
            Explore Our <span>Healthy & </span><span>Simple Recipes</span>
          </h1>
          <p className="text-lg text-secondary max-w-4xl mx-auto mb-8">
            Discover nutritious recipes from around the world that fit your busy lifestyle.
            Search by name, ingredient, or explore by category - find your next favorite dish!
          </p>
          <div className="w-24 h-1 bg-primary rounded mx-auto mb-10"></div>
            {
              error && 
              <div className="mt-8 p-8 bg-red-50 border border-red-200 rounded-2xl inline-block">
                <p className="text-red-500">Error</p>
                <button className="mt-4 items-center px-4 py-3 text-white bg-orange-400 rounded-xl hover:bg-orange-400
                font-bold transition-all duration-300 ">
                  <RefreshCw className="w-4 h-4 mr-2" />
                </button>
              </div>
            }
          </div>

        {/* filter bar */}
        <div className="py-6">
          <div className="container mx-auto px-4">
            <Filterbar 
            maxPrepTime={maxPrepTime}
            setMaxPrepTime={setMaxPrepTime}
            maxCookTime={maxCookTime}
            setMaxCookTime={setMaxCookTime}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
            onChangeCategory={onChangeCategory}
            selectedCategory={selectedCategory}
            />
          </div>
        </div>

        {/* {recipe section} */}
        <div className="container mx-auto text-center px-4 py-12">
          <RecipesGrid recipes={filteredRecipes} onViewRecipe={handleViewRecipe}
          isLoading={loading} />
        </div>

        {/* recipe model */}
           <RecipeModel isOpen={isModalOpen} onClose={handleCloseModal} recipes={selectedRecipe} /> 
      </div>
    )
  }

export default RecipesPage;