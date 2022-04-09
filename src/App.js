import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './Routing/Header';
import Home from './Routing/Home';
import PageNotFound from './Routing/PageNotFound';
import Student from './Routing/Student';
import Contact from './Routing/Contact';

function App() {
  return (
    <div className="App">

        <Router>

            <Header/>
                <Routes>
                  <Route path='/' element={<Navigate to='/Home' />}  />
                  <Route path='/Home' element={<Home/>}  />
                  <Route path='/Student' element={<Student/>}  />
                  <Route path='/Contact' element={<Contact/>}  />
                  <Route path='/*' element={<PageNotFound/>}  />
                </Routes>
            
        </Router>

    </div>
  );
}

export default App;
