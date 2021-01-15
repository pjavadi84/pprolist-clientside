import React from 'react';
// import Vendor from '../components/Vendor'
import {Link} from 'react-router-dom'

const VendorsShow = (props) => {

    return (
        <div>
        {props.vendors.map(vendor =>
          <ul key={vendor.id}>
            <Link to={`/vendors/${vendor.id}`}>{vendor.name} 
            - ${vendor.total_cost}</Link>
          </ul> )}
        </div>
    ); 
    
}

export default VendorsShow