import fork from "./../assets/images/fork.png"
import knife from "./../assets/images/knife.png"


const CTASection = () => {
  return (
    <div className="py-20 lg:py-32 bg-light-neutral-300/50 relative overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96">
            <img src={fork} alt="knife" className="w-full h-[60%] object-contain opacity-50" />
        </div>
        <div className="absolute top-5 right-0 w-96 h-96">
            <img src={knife} alt="knife" className="w-[200px] h-[200px] object-contain opacity-50" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
            <h3 className="text-4xl lg:text-6xl text-primary font-bold mb-4">Ready Cook Smarter?</h3>
            <p className="text-xl lg:text-2xl text-primary max-w-3xl mb-16 mx-auto leading-relaxed">Hit the button, pick a recipe
                and get dineer on the table-first
            </p>
            <button className="bg-primary text-light-neutral-100 px-10 py-4 rounded-2xl text-xl shadow-xl
            transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer">Browse Recipes</button>
        </div>
    </div>
  )
}

export default CTASection