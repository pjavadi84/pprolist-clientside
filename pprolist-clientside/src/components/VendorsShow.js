import React from 'react';
// import Vendor from '../components/Vendor'
import {Route, Link} from 'react-router-dom'

const VendorsShow = (props) => {

    return (
        <div>
        {props.vendors.map(vendor =>
          <li key={vendor.id}>
            <Link to={`/vendors/${vendor.id}`}>{vendor.name} - ${vendor.total_cost}</Link>
          </li> )}
        </div>
    ); 
    
}

export default VendorsShow