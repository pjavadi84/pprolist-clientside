import React, {useState, useEffect } from 'react';
// import Vendor from '../components/Vendor'
import { Link } from 'react-router-dom'

const FoundVendor = (props) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    // debugger

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        const results = props.vendor.filter(vendor =>
            {if(vendor.name.includes(searchTerm) ){
                return searchTerm
            }
        }
            
            
            // vendor.name.includes(searchTerm)
        );
        
        if(results){
            setSearchResults(results)
        } else {
            console.log("nothing found")
        }
        
        
        
        }, [searchTerm, props.vendor]
      );

    return (
        <div style={{backgroundColor: 'yellow', width: '30rem'}} border="light" >
            <h3>Vendor Names:</h3>
            <label>Find by name:</label>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            <br></br>
            {searchResults.map(vendor => (
                <div>
                    <li><Link to={`/vendors/${vendor.id}`}>{vendor.name}</Link></li>
                </div>

            ))}
            <br></br><br></br>
        </div>
    )
}


export default FoundVendor;