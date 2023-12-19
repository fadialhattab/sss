import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Conect from './routes/Conect';
import Cataloge from './routes/Cataloge';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import Hair from './pages/hair';
import Nail from './pages/Nail';
import Makeup from './pages/Makeup';
import { Footer } from './components/Footer';
import Sabga from './pages/Sabga';
import Proteen from './pages/Proteen';
import AddCardForm from './components/AddCardForm';
function App() {
  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Conect" element={<Conect />} />
          <Route path="/Cataloge" element={<Cataloge />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path='/Signup' element={<Signup/>}/>
          <Route path="/pages/hair" element={<Hair />} />
          <Route path='/pages/Nail' element={<Nail/>}/>
          <Route path="/pages/Makeup" element={<Makeup/>}/>
          <Route path='/pages/Sabga' element={<Sabga/>}/>
          <Route path='/pages/Proteen' element={<Proteen/>}/>
         <Route path='/components/AddCardForm' element={<AddCardForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
