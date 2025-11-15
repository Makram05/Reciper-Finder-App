import heroImage from "./../assets/images/home_hero_image.jpg"
const HeroSection = () => {

  return (
    <div className="container mx-auto px-4 py-5">
        <div className="px-4 py-15 flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">Healthy Meals, Zero Fuss</h1>
            <p className="text-lg sm:text:xl  text-gray-600 max-2-2 leading-relaxed">A spark of flavor begins here - explore creative recipes in just a few seconds</p>

            <button className="bg-primary text-light-neutral-0 px-10 py-4 text-lg sm:text-xl 
            rounded-2xl shadow-xl mt-2 transition-all duration-300 hover:bg-secondary transform 
            hover:scale-105 hover:shadow-2xl cursor-pointer">Start  Exploring</button>

            <div className="mt-16 w-full">
                <img src={heroImage}  className="required: mx-auto w-95%  rounded-3xl shadow-2xl
                transition-all duration-300 transform hover:scale-105 border-white border-8"/>
            </div>
        </div>
    </div>
  );

}

export default HeroSection