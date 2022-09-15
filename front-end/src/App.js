import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import Student from './student/Student';
import StudentView from './views/students/StudentView';
import AssistantView  from './views/assistants/AssistantView';
import AcademicianView  from './views/academicians/AcademicianView';
import LessonView from './views/lessons/LessonView';
import Assistant from './assistant/Assistant';
import Academician from './academician/Academician';
import Exam from './exam/Exam';
import Homework from './homework/Homework';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path ="/Student" element={<Student/>} />
          <Route path = "/Exam" element = {<Exam/>} />
          <Route path = "/Homework" element = {<Homework/>} />           
          <Route path ="/Assistant" element={<Assistant/>} />
          <Route path ="/Academician" element={<Academician/>} />
          <Route path='/StudentView' element= {<StudentView/>}/>
          <Route path='/AssistantView' element= {<AssistantView/>}/>
          <Route path='/AcademicianView' element= {<AcademicianView/>}/>
          <Route path='/LessonView' element= {<LessonView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
