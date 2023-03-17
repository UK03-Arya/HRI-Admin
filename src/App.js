import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Screen1 from "./Pages/Screen1"
import Screen2 from "./Pages/Screen2"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Screen1/>}/>
    <Route path="Screen2" element={<Screen2/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
