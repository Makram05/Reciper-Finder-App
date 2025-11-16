import { Award, ChefHat, Clock, Heart, Leaf, User } from "lucide-react";
import { Link } from "react-router-dom";

const stats=[
    {number:"10K+", label:"Happy Cooks", icon:User},
    {number:"500+", label:"Healthy Recipes", icon:ChefHat},
    {number:"30min", label:"Average Cook TIme", icon:Clock},
    {number:"5⭐",  label:"Average Rating", icon:Award},
];

const values=[
    {
        icon:Heart,
        title:"Healthy First",
        description:
        "Every recipe is crafted with nutrition in mind, using whole foods and natural ingredients to fuel your body.",
    },
    {
        icon:Clock,
        title:"Time Conscious",
        description:
        "We understand busy lifstyle. Our recipes designed to be quick, efficient and prefect for life.",
    },
    {
        icon:Leaf,
        title:"Sustainable",
        description:
        "We promote sustainable cooking practices and ingredients that are good for and the Planet."
    },
];

const Team=[
    {
        name:"Sarah Jhonson",
        role:"Head Chef & Nutritionist",
        image:"https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?%20auto%20compress&cs=tinysrgb&w=400",
        bio:"15+ years creating healthy, delicious recipes"
    },
    {
        name:"Michael Chen",
        role:"Recipe Developer",
        image:"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto-compressics-tinysrgbbw-400",
        bio:"Specialize in quick, family-friendly meals"
    },
    {
        name:"Emma Rodriguez",
        role:"Food Photographer",
        image:"https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?%20auto%20compress&cs=tinysrgb&w=400",
        bio:"Makes every dish look as good as it tastes"
    }
];


const AboutPage = () => {
    
  return (
    <div className="min-h-screen bg-light-neutral-200">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl text-primary font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl max-w-3xl text-gray-950 mx-auto leading-relaxed mb-8">
            We believe that healthy eating shouldn't be complicated, time
            consuming, or boring. Our mission is to make nutritious cooking
            accessible to everyone.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* {STATS SECTION} */}
      <section className="py-16 bg-white px-10">
        <div
          className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4
        gap-8 text-center"
        >
          {stats.map((stat,index)=>(
            <div className="mx-auto" key={index}>
            <div className="w-12 h-12 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-4">
                <stat.icon className="text-white w-7 h-7" />
            </div>
            <h3 className="text-3xl text-primary font-bold ">{stat.number}</h3>
            <p className="text-gray-950 text-center">{stat.label}</p>
          </div>
          ))}
        </div>
      </section>

      {/* {MISSION SECTION} */}
      <section className="py-20 lg:py-32 lg:bg-light-neutral-200/50 px-10 ">
        <div className="container mx-auto px-4 grid gap-5 lg:grid-cols-2  items-center">
          <div>
            <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Why We Started This Journey
            </h3>
            <div className="space-y-6 text-lg text-gray-950 leading-relaxed">
              <p>
                It all began in a small kitchen where our founder, struggling to
                balance a demanding career with healthy eating, realized that
                most "healthy" recipes were either too complicated or simply
                didn't taste good.
              </p>
              <p>
                We set out to change that. Every recipe on our platform is
                tested in real kitchens by real people with busy lives.
              </p>
              <p>
                Today, we're proud to help thousands of people cook healthier
                meals without the stress proving that good food doesn't have to
                be complicated
              </p>
            </div>
          </div>
          <div className="relative px-4 ">
            <img
              src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?
            auto-compress&cs=tinysrgb&w=800"
              alt=""
              className="rounded-3xl shadow-xl  hover:shadow-2xl transform hover:scale-105 "
            />
          </div>
        </div>
      </section>

      {/* {value section} */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl text-primary font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value,index)=>(
              <div key={index} className="bg-light-neutral-50  rounded-3xl shadow-md p-8 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary mb-4 rounded-2xl flex justify-center items-center mx-auto">
                  <value.icon className="w-7 h-7 text-white" />
                 </div>
                <h2 className="text-2xl text-primary font-bold">{value.title}</h2>
                <p className="text-gray-950">{value.description}</p>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* {team members} */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {Team.map((member)=>(
              <div className="group">
                <img
                  src={member.image}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-4 hover:shadow-xl
                  transform hover:scale-105"
                />
                <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                <p className="text-orange-400">{member.role}</p>
                <p className="text-gray-950">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {CTA section} */}
      <section className="py-20 bg-primary text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to start cooking?</h2>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">Join thousands of home cooks who have
        transformed their kitchens with our simple, healthy recipes.</p>
        <button className="mt-8 bg-green-700 hover:bg-green-600 text-white px-8 py-3 rounded-2xl text-lg font-bold
        transform hover:scale-105 transition shadow-xl cursor-pointer"><Link to="/recipes"> Browser Recipes</Link></button>
      </section>
    </div>
  );
};

export default AboutPage;
