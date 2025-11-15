import Header from "./components/Header"
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import RecipesPage from "./pages/RecipesPage"
import Footer from "./components/Footer"


const App = () => {
  return (
   <Router>
     <div className="min-h-screen  bg-linear-to-br from-orange-50 via-white to-teal-50 ">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/about" element={<AboutPage /> } />
          <Route path="/recipes" element={<RecipesPage /> } />
          
        </Routes>
      </main>
      
      <Footer />
     </div>
   </Router>
  )
}

export default App