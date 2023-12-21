import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Auth from './layouts/Auth';
import Landing from './pages/Landing';


function App() {
  return (
    <div className="App">
        <Router>
           <Routes>      
                 <Route exact path='/' element={< Landing/>}></Route>
                 
              
          </Routes> 
       </Router>
    </div>
  );
}

export default App;
