import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import PlantIndex from "./pages/PlantIndex"
import PlantNew from "./pages/PlantNew"
import PlantShow from "./pages/PlantShow"
import PlantEdit from "./pages/PlantEdit"

const App = () => {
  const [mockPlants, setMockPlants] = useState(plants)
  console.log(mockPlants)
  return(
      <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plantindex" element={<PlantIndex />} /> 
          <Route path="/plantnew" element={<PlantNew />} />
          <Route path="/plantshow" element={<PlantShow />} />
          <Route path="/plantedit" element={<PlantEdit />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
  </>
  )
}

export default App;
