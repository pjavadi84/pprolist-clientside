import React from 'react';
import Vendor from '../components/Vendor'
import {Route} from 'react-router-dom'
const VendorsShow = (props) => {

    return (
        <div>
            <h1>List of Vendors: </h1>
            {props.vendors.map(vendor => 
                <div key={vendor.id}><Vendor vendor={vendor} />
                    <Route path='/vendors/:id' render={()=> <Vendor /> } />
                </div>
                
            )}
        </div>
    ); 
    
}

export default VendorsShow