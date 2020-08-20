import React,{useState,useContext} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    NavbarText
} from "reactstrap"

import {Link} from "react-router-dom" //for clicking here and there

import {UserContext} from "../context/UserContext"

const Header = () => {
    const context = useContext(UserContext)

    //this state is for toggling bar
    const[isOpen, setIsOpen] = useState(false)
  //for flipping switching on/off
   
    const toggle = () => setIsOpen(!isOpen)

return(
    <Navbar color = "info" light expand = "md">
    <NavbarBrand>
    <Link to = "/" className = "text-white">LCO gitfire app</Link></NavbarBrand>
    <NavbarText className= "text-white">{
        context.user?.email ? context.user.email : ""}
    </NavbarText>
    <NavbarToggler onClick = {toggle}/>
    <Collapse isOpen={isOpen} navbar>
    <Nav className = "ml-auto" navbar>
    {
        context.user ? ( <NavItem>
            <NavLink onClick = {() => {context.setUser(null)}} className = "text-white">
            Logout
            
            </NavLink>
            </NavItem>) : ( <> <NavItem>
                <NavLink tag = {Link} to = "/signup"className = "text-white">
                Signup
                
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag = {Link} to = "/signin" className = "text-white">
                Signin
                
                </NavLink>
                </NavItem> </> ) 
    }
   
   
    </Nav>
    </Collapse>
    </Navbar>
)

}

export default Header;