import carrotImage from "./../assets/images/carrotImage.jpg"
import leafImage from "./../assets/images/leaf.jpg"
import searchImage from "./../assets/images/searchImage.jpg"


const Features=[
    {
        icon:carrotImage,
        title:"Whole Food Recipes",
        description:"Each dish uses everyday, unprocesses ingredients."
    },
    {
        icon:leafImage,
        title:"Minimun fuss",
        description:"All recipes are designed to make eating healthy quick and easy."
    },
    {
        icon:searchImage,
        title:"Search in seconds",
        description:"Filter by name or ingredients and jump straight to the recipe you need."
    },
];


const FeatureSection = () => {
    return (
        <div className="py-20 bg-light-neutral-100">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-4xl sm:text-5xl text-primary font-bold mb-6">
                    What will you get
                </h3>
                {/* {features of grid} */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {Features.map((feature)=>(
                        <div className="my-10">
                        <div className="flex flex-col space-y-3 text-left">
                            <div className="w-15 h-15 bg-white rounded-xl flex items-center justify-center my-4">
                                <img
                                    src={feature.icon}
                                    alt=""
                                    className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl text-primary font-bold">
                                   {feature.title}
                                </h3>
                                <p className="text-secondary text-xl leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
