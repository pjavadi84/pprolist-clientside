import React, {useState, useEffect } from 'react';
// import Vendor from '../components/Vendor'
import { Link } from 'react-router-dom'

const FoundVendor = (props) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        
        const results = props.vendor.vendors.filter(vendor =>
            vendor.name === searchTerm
        );
        
        if(results){
            setSearchResults(results)
        } else {
            console.log("nothing found")
        }
        
        
        
        }, [searchTerm, props.vendor.vendors]
      );

    return (
        <div style={{backgroundColor: 'yellow', width: '30rem'}} border="light" >
            <h3>Vendor Names:</h3>
            <label>Find by name:</label>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            <br></br>
            {searchResults.map(vendor => (
                <Link to={`/vendors/${vendor.id}`}>{vendor.name}</Link>
            ))}
            <br></br><br></br>
        </div>
    )
}


export default FoundVendor;