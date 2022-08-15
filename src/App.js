import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';

function App() {
  return (
   <>
   <Routes>
    <Route element={<Homepage/>} path='/' />
    <Route element={<Aboutpage/>} path='about' />
   </Routes>
   </>
  );
}

export default App;
