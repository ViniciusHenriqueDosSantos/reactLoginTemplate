import {Container, Nav, Navbar, NavbarBrand, Offcanvas} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
export default function NavBar(){

    return(
            
            <Navbar expand="lg" class=' d-flex justify-content-around'>

               <Container>

                  <Link to="/"><Navbar.Brand >Factory Mind</Navbar.Brand></Link>
               
                <Navbar.Toggle aria-controls='offcanvas'/>

                <Navbar.Offcanvas id="offcanvas" aria-labelledby="offcanvasTittle">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasTittle">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex justify-content-end'>
                        <Nav>
                            <Nav.Link><NavLink to="/cadastro">Cadastro</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>  
                               </Container>

                
            </Navbar>
      
    )
}
