import { Outlet } from 'react-router';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
function App() {
  return (
    <div className="App w-100">
        <Navbar/>
          
          
          
          
          <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
