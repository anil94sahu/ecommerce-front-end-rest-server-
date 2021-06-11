import React from 'react'
import {Navbar, Nav, NavDropdown, Container  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import { signout } from '../../actions';


export default function Header(props) {

    const auth =  useSelector(state => state.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout())
    }

    const renderLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Signout</span>
                </li>
            </Nav>
        );
    }

    const renderNonLoggedInLinks = () => {
        return (
                <Nav>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="signin">Signin</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="signup">Signup</NavLink>
                    </li>
                </Nav>
        );
    }

    return (
        <div>
            <Container fluid>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{zIndex:1}}>
                    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                    <Link className="navbar-brand" to = "/">Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {renderLoggedInLinks}
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            
        </div>
    )
}
