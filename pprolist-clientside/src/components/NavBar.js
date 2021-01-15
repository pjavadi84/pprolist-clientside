import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar } from 'react-bootstrap'
import About from '../static/About'
import '../App.css';

const navComp = (props) => {
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Link to="/vendors">Home</Link><br></br>
                <Link to="/vendors/new">New Vendor</Link><br></br>
                <Link to="/About">About</Link>
            </Navbar>
        </div>
    )

}

    

export default navComp
