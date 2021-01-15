import React from 'react';
// import Vendor from '../components/Vendor'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteVendor} from '../actions/deleteVendor'



const VendorsShow = (props) => {

  const handleDelete = (vendor) => {
    props.deleteVendor(vendor.id)
  }



    return (
        <div>
        {props.vendors.map((vendor) =>
          <ul key={vendor.id}>
            <Link to={`/vendors/${vendor.id}`}>{vendor.name} 
<<<<<<< HEAD
            - ${vendor.total_cost}</Link>
=======
              - ${vendor.total_cost}
              - <button onClick={()=> handleDelete(vendor)}>X</button>
            </Link>
>>>>>>> remove-vendor
          </ul> )}
        </div>
    ); 
    
}

export default connect(null, {deleteVendor})(VendorsShow)