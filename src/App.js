import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicExample from './Navbar';
import CourseList from './Courselist';
import CourseView from './Courseview';
import Login from './Login';
import FormSection from './Formsection';
import TableOfCourses from './Tableofcourses';
import Carousels from './Carousal';
import Footer from './Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BasicExample></BasicExample>
        <Carousels></Carousels>
        <Routes>
          <Route path='/' element={ <CourseList />} ></Route>
          <Route path='/:id' element={<CourseView />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/form' element={<FormSection />}></Route>
          <Route path='/form/table' element={<TableOfCourses />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
