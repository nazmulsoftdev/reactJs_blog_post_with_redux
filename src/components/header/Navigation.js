import React, { useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { CodeSlash } from 'react-bootstrap-icons';

import {NavLink} from 'react-router-dom'


const Navigation = () => {
 
 
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

    

    
    return (
          <Navbar color="light" light expand="sm">
              <div className="container">
                <NavbarBrand href="/">
                    <CodeSlash className="text-danger" size="30"/>
                </NavbarBrand>
                  <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/blogpage" className="nav-link">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/postpage" className="nav-link">Post</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contactpage" className="nav-link">Contact</NavLink>
                        </NavItem>
                   </Nav>
                </Collapse>
              </div>
          </Navbar>
    );

}



export default Navigation