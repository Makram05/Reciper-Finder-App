import { ChevronDown, Search } from "lucide-react"



const prepTimeOptions = [
    {value:30, label:"30 mins"},
    {value:20, label:"20 mins"},
    {value:15, label:"15 mins"},
    {value:10, label:"10 mins"},
    {value:5, label:"5 mins"},
];

const cookTimeOptions = [
    {value:30, label:"30 mins"},
    {value:20, label:"20 mins"},
    {value:15, label:"15 mins"},
    {value:10, label:"10 mins"},
    {value:5, label:"5 mins"},
];

const categories=[
    {value:'', label:"All Categories"},
    {value:'Beef', label:"Beef"},
    {value:'Chicken', label:"Chicken"},
    {value:'Dessert', label:"Dessert"},
    {value:'Pasta', label:"Pasta"},
    {value:'Lamb', label:"Lamb"},
    {value:'Pork', label:"Pork"},
    {value:'Seafood', label:"Seafood"},
    {value:'Breakfast', label:"Breakfast"},
    {value:'Vegetarian', label:"Vegetarian"},
];

const Filterbar = ({maxPrepTime,setMaxPrepTime,maxCookTime,setMaxCookTime,
    searchTerm,setSearchTerm,onSearch,onChangeCategory,selectedCategory
}) => {
  return (
    <div className="bg-white/80 p-8 rounded-3xl shadow-xl backdrop-blur-sm mb-12 border
    border-orange-100 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
                <label className="block text-md font-semibold text-gray-700 mb-4">
                    Category
                    {console.log(selectedCategory)}
                </label>

                <div className="relative">
                    <select className="w-full px-5 py-5 border border-gray-300
                    rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent
                    outline transition-all duration-300 appearance-none bg-white shadow-sm
                    hover:shadow-md font-medium" value={selectedCategory} onChange={(e)=>onChangeCategory(e.target.value)}>

                        {categories.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none " />
                </div>
            </div>

            <div className="relative">
                <label className="block text-md font-semibold text-gray-700 mb-4">
                    Max Prep Time
                    {console.log(maxPrepTime)}
                </label>

                <div className="relative">
                    <select className="w-full px-5 py-5 border border-gray-300
                    rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent
                    outline transition-all duration-300 appearance-none bg-white shadow-sm
                    hover:shadow-md font-medium" value={maxPrepTime} onChange={(e)=>setMaxPrepTime(e.target.value)}>

                        {prepTimeOptions.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none " />
                </div>
            </div>

            <div className="relative">
                <label className="block text-md font-semibold text-gray-700 mb-4">
                    Max Cook Time
                </label>

                <div className="relative">
                    <select className="w-full px-5 py-5 border border-gray-300
                    rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent
                    outline transition-all duration-300 appearance-none bg-white shadow-sm
                    hover:shadow-md font-medium" value={maxCookTime} onChange={(e)=>setMaxCookTime(e.target.value)}>

                        {cookTimeOptions.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none " />
                </div>
            </div>

            <div className="relative">
                <label className="block text-md font-semibold text-gray-700 mb-4">
                    Search
                </label>

                <div className="relative">
                    <input type="text" 
                    placeholder="Search by name or ingredients..."
                    className="w-full px-5 py-5 pl-12 border border-gray-300
                    rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent
                    outline transition-all duration-300  shadow-sm
                    hover:shadow-md font-medium" value={searchTerm} 
                    onChange={(e)=>{
                        setSearchTerm(e.target.value);
                        if (onSearch){
                            onSearch(e.target.value);
                        }}} 
                        
                        onKeyPress={(e)=>{
                            if (e.key === "Enter" && onSearch){
                                onSearch(searchTerm);
                            }
                        }}
                        />
                    <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filterbar