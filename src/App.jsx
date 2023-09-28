import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import TopNav from './Components/TopNav/TopNav';
import Navbar from './Components/Nav/Nav';

import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import Civil from './Components/Department/Civil';
import EEE from './Components/Department/EEE';
import ECE from './Components/Department/ECE';
import Mech from './Components/Department/Mech';
import CSE from './Components/Department/CSE';
import Present from './Components/Students/Present';
import Absent from './Components/Students/Absent';
import Student from './Components/Student/Student';

import './App.css';

import { useState } from 'react';


function App() {
  const [navBar, setNavBar] = useState('nav');
  const resNavBar = () => {
    setNavBar('nav-open')
  }
  const NorNavBar = () => {
    setNavBar('nav')
  }

  return (
    <>
      <BrowserRouter>
        <div style={{
          display: 'flex'
        }}>
          <Navbar
            navBar={navBar}
            // NorNavBar = {NorNavBar}
          />
          <div className="main">
            <div>
              <TopNav
                resNavBar={resNavBar}
                NorNavBar={NorNavBar}
              />
            </div>
            <div className="content">
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/civil' element={<Civil />} />
              <Route path='/eee' element={<EEE />} />
              <Route path='/ece' element={<ECE />} />
              <Route path='/mech' element={<Mech />} />
              <Route path='/cse' element={<CSE />} />
              <Route path='/present' element={<Present />} />
              <Route path='/absent' element={<Absent />} />
              <Route path='/student/:id' element={<Student />} />
              {/* default route */}
              <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
            </div>
            
            <Footer />
          </div>
        </div>

      </BrowserRouter>

    </>
  )
}

export default App