import './App.css';
import NavbarUnlogged from './pages/Navbar';
function Logged() {
  return (
    <div className="App">
        <NavbarLogged/>
          <Outlet/>
        <FooterLogged/>
    </div>
  );
}

export default Logged;
