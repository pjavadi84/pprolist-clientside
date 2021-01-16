import React from 'react';
// import Vendor from '../components/Vendor'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteVendor} from '../actions/deleteVendor'
import vendors from './vendors.css'


const VendorsShow = (props) => {

  const handleDelete = (vendor) => {
    props.deleteVendor(vendor.id)
  }



    return (
        <div className="vendor-show-div" style={vendors}>
        {props.vendors.map((vendor) =>
          <ul key={vendor.id}>
            <Link to={`/vendors/${vendor.id}`}>{vendor.name} 
              - ${vendor.total_cost}
              - <button onClick={()=> handleDelete(vendor)}>X</button>
            </Link>
          </ul> )}
        </div>
    ); 
    
}

export default connect(null, {deleteVendor})(VendorsShow)