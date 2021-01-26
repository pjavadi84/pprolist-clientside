import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar } from 'react-bootstrap'
// import About from '../static/About'
import '../App.css';

const navComp = (props) => {
    
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light" >
                <div>
                    <li><Link to="/vendors">All vendors</Link></li>
                    <li><Link to="/vendors/new">New Vendor</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/vendors/find">Search</Link></li>
                </div>
                
            </Navbar>
        </div>
    )

}

    

export default navComp
