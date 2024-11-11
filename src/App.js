import './App.css';
import { BreadcrumbProvider } from './components/CourseDetails/BreadcrumbContext';
import { CourseDetails } from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses-section/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {TestSeriesDetails} from './pages/TestSeriesDetails';
import Home from './pages/Home';
import {Route, Routes } from 'react-router-dom';
import Chatbot from './components/Chatbot/Chatbot';


function App() {
  return (
    <BreadcrumbProvider>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path='/course/:id' element={<CourseDetails/>}/>
          <Route path='/test-series/:subExamName' element={<TestSeriesDetails/>}/>
        </Routes>
        <Footer></Footer>
        <Chatbot></Chatbot>
      </div>
    </BreadcrumbProvider>
    
  );
}

export default App;
