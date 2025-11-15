import { Instagram, Twitter, Youtube } from "lucide-react";
import logo from "./../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className='bg-light-neutral-100 mx-auto py-6'>
        <div className='container mx-auto text-center'>
            <div className='grid md:grid-cols-3 gap-8 items-center'>
                <div className="text-center mx-auto md:text-left">
                    <img src={logo} width={150} />
                </div>

                <div className="flex items-center justify-center space-x-1">
                  <span className="text-gray-400"> Made with</span>
                  <span className="text-red-500">❤️</span>
                  <span className="text-gray-400">and</span>
                  <span className="text-orange-400">🥕</span>
                </div>

                <div className="flex justify-center items-center md:justify-end space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center
                  justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110">
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center
                  justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110">
                    <Youtube className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-full flex items-center
                  justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110">
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer