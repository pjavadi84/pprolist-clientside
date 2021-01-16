import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar } from 'react-bootstrap'
// import About from '../static/About'
import '../App.css';

const navComp = (props) => {
    
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link to="/vendors">Home</Link>
                <Link to="/vendors/new">New Vendor</Link>
                <Link to="/About">About</Link>
            </Navbar>
        </div>
    )

}

    

export default navComp
