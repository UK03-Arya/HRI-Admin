import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Screen1 from "./Pages/Screen1"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Screen1/>}/>
    

    </Routes>
    </BrowserRouter>
  );
}

export default App;
