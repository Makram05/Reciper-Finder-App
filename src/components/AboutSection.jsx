import image from "./../assets/images/home_about_image.jpg"


const AboutSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100 from-teal-50 to-orange-50">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl lg:text-6xl text-primary font-bold pb-8">Built for real life</h2>
                    <p className="space-y-6 text-lg lg:text-xl leading-relaxed text-secondary ">
                       Cooking shouldn't be complicated. These recipe come in under 
                        <span className="text-primary font-bold"> 30 minutes </span>
                        of active time, fit busy schedule, and good taste enough to repeat.
                    </p>
                </div>
                <div className="relative">
                    <img src={image} alt="image"  className="relative w-full h-[400px] rounded-3xl shadow-2xl transition-all 
                    duration-300 transform hover:scale-105" />     
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection