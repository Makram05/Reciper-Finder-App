import { Clock, X } from "lucide-react";

const RecipeModel = ({recipes,isOpen,onClose}) => {

    if(!isOpen || !recipes) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center 
            p-4 z-50"
        >
            <div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh]
                    overflow-y-auto"
            >
                <div className="relative">
                    <img
                        src={recipes.image}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />

                    <button onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm
                 bg-white/90 hover:bg-whitetransition-all duration-300 font-bold"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>

                    <div className="p-8">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {recipes.title}
                            </h3>
                            <p className="text-gray-600 text-lg">{recipes.description}</p>
                        </div>

                        <div className=" grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-2xl">
                            <div className="text-center">
                                <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Prep Time</p>
                                <p className="text-gray-600 font-semibold">{recipes.prepTime}</p> min
                            </div>
                            <div className="text-center">
                                <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Cook Time</p>
                                <p className="text-gray-600 font-semibold">{recipes.cookTime}</p> min
                            </div>
                            <div className="text-center">
                                <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Servings</p>
                                <p className="text-gray-600 font-semibold">{recipes.servings}</p> 
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                     Ingredients
                                </h2>
                                <div className="space-y-3">
                                    {recipes.ingredients.map((ingredient,index)=>(
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-600 mt-2 flex-shrink-0"></div>
                                        <span className=" text-gray-700 mb-2">{ingredient}</span>
                                    </div>
                                    ))}
                                   
                                </div>
                            </div>
                            <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
                                    <div>
                                        {recipes.instructions.map((step,index)=>(
                                        <div className="flex items-start space-x-4">
                                            <div className="w-6 h-6 bg-teal-600 rounded-full 
                                                flex justify-center text-white items-center flex-shrink-0 text-sm font-semibold">
                                                {index+1}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed mb-4">{step}</p>
                                        </div>
                                        ))}
                                        
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags</h3>
                                    <div className="felx flex-wrap gap-2">
                                        {recipes.tags.map((tag,index)=>(
                                        <span key={index} className="text-sm font-semibold text-gray-700 rounded-full bg-teal-200 py-1 px-4 mr-2">
                                            #{tag}
                                        </span>
                                        ))}
                                       
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeModel;
