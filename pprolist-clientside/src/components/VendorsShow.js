import React from 'react';

const VendorsShow = (props) => {

    return (
        <div>
            <h1>List of Vendors: </h1>
           {props.vendors.map(vendor => 
           <li key={vendor.id}>{vendor.name} - cart's total: {vendor.total_cost}</li> )}
        </div>
    ); 
    
}

export default VendorsShow