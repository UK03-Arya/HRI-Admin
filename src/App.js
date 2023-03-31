import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Screen1 from "./Pages/Screen1"
import Screen2 from "./Pages/Screen2"
import CreateCourse from './component/CreateCourses/CreateCourse';
import MCQQuesScreen from './Pages/MCQQuesScreen';
import AddQuesScreen from './Pages/AddQuesScreen';
import QuestionBank from './Pages/QuestionBank';
import AddQuesForm from './Pages/AddQuesForm';
import BulkUpload from './Pages/BulkUpload';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Screen1/>}/>
    <Route path="Screen2" element={<Screen2/>}/>
    <Route path="CreateCourse" element={<CreateCourse/>}/>
    <Route path="MCQQuesScreen" element={<MCQQuesScreen/>}/>

    <Route path="AddQuesScreen" element={<AddQuesScreen/>}/>
    <Route path="QuestionBank" element={<QuestionBank/>}/>
    <Route path="AddQuesForm" element={<AddQuesForm/>}/>
    <Route path="BulkUpload" element={<BulkUpload/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
