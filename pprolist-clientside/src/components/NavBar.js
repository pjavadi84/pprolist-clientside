import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar } from 'react-bootstrap'
// import About from '../static/About'
import '../App.css';

const navComp = (props) => {
    
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link to="/vendors">All vendors</Link><br></br>
                <Link to="/vendors/new">New Vendor</Link><br></br>
                <Link to="/About">About</Link><br></br>
                {/* <Link to="/vendors/find">Search vendors!</Link> */}
            </Navbar>
        </div>
    )

}

    

export default navComp
