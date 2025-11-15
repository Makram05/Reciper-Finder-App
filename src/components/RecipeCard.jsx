import { Clock, Users } from "lucide-react"


const RecipeCard = ({recipes,onViewRecipe}) => {
  return (

    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl
    transition-all duration-500 overflow-hidden group transform hover:scale-105">
        
        <div className="relative">
            <img src={recipes.image}  className="w-full h-56 object-cover  group-hover:scale-110 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
            opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>

        <div className="p-6 rounded-t-2xl">
            <h3 className="text-xl font-bold text-gray-800 line-clamp-1 mb-2">
                {recipes.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{recipes.description}</p>

            <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Servings: {recipes.servings}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Prep: {recipes.prepTime} mins</span>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Cook: {recipes.cookTime} mins</span>
                </div>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold transition-all duration-300 
            shadow-lg  hover:from-orange-600 hover:to-teal-700 hover:shadow-xl cursor-pointer" onClick={()=>onViewRecipe(recipes)}>
                View Recipe
            </button>
        </div>
    </div>
  )
}

export default RecipeCard