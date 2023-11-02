import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Team from './pages/Team';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import Header from './Components/Header';
//import Fotter1 from './Fotter/Fotter1';
import Fotter2 from './Fotter/Fotter2';
import Fotter3 from './Fotter/Fotter3';
import Blogtext from './Blogstext/Blogtext';
import Blogtext1 from './Blogstext/Blogtext1';
import Blogtext2 from './Blogstext/Blogtext2';
import Contact from './pages/Contact';
import Fotter1 from './Fotter/Fotter1';
import Fotter4 from './Fotter/Fotter4';

const App = () => {
  return (
    <div>
<BrowserRouter>
<Header/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="donate" element={<Donate/>} />
          <Route path="Blog" element={<Blog/>} />
          <Route path="blogtext" element={<Blogtext />} />
          <Route path="blogtext1" element={<Blogtext1 />} />
          <Route path="blogtext2" element={<Blogtext2 />} />
          <Route path="contact" element={<Contact/>} />


          <Route path="about" element={<Aboutus />} >

          
      </Route>
      </Routes>
      <Fotter1/>
      <Fotter2/>
      <Fotter4/>

      <Fotter3/>

      
    </BrowserRouter>
    </div>
  )
}

export default App