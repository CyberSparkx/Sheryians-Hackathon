import Hero3D from "./Components/Hero3D"
import Nav from "./Components/Nav"
import ScrollTextFade from "./Components/ScrollTextFade"


const App = () => {
  return (
    <div className="bg-zinc-900 relative">
      <Nav/>
      <Hero3D/>
      <ScrollTextFade/>
      <div className="relative w-full h-screen z-[20] bg-blue-600"></div>
    </div>
  )
}

export default App