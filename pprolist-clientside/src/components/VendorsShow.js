import React, {useState, useEffect } from 'react';
import { Link, Switch } from 'react-router-dom'
import FoundVendor from './FoundVendor';
import { connect } from 'react-redux'
import vendors from './vendors.css'
import {Button} from 'react-bootstrap'
import EditVendor from '../actions/editVendor'
import VendorEdit from './VendorEdit'


const VendorsShow = (props) => {
  const [counts, setCounts] = useState({}); 
  
  const [sort, setSort] = useState(false)
  
  useEffect(() => {  
    console.log("useEffect is called")  
    setCounts(
      props.vendors.reduce((counts, { id }) => ({...counts,[id]: 0}), {})
    );
  }, [props.vendors]
  );
  
  
  const handleDelete = (vendor) => {
    props.deleteVendor(vendor.id);
  };
  
  
  const handleVendorEdit = (vendor) => {
    console.log("edit clicked")
  }
  

  const handleCount = (id) => () =>
    setCounts((counts) => ({
      ...counts,
      [id]: counts[id] + 1 // <-- updates specific vendor's count
    
    }));

  const handleSortClick = () => {
    setSort (
      !sort
    )
  }

  const sortAlphabetically = () => {
    
    return [...props.vendors].sort((a,b)=>
    { const vendorA = a.name.toUpperCase(); 
      const vendorB = b.name.toUpperCase(); 
      if (vendorA < vendorB) {
        return -1;
      }
      if (vendorA > vendorB) {
        return 1;
      }
      return 0;})
  }

  
  return (
    <Switch>
    <div>
      <div className="search-vendor">
        <FoundVendor vendor={props.vendors} />
      </div>

      <button onClick={handleSortClick}>Sort</button>

      <div className="vendor-show-div" style={vendors}>

      
       {(sort ? sortAlphabetically() : props.vendors).map((vendor) => (
        <ul key={vendor.id}>
          <Link to={`/vendors/${vendor.id}`}>
            {vendor.name}- ${vendor.total_cost} 
          </Link>
          <Link to={`/vendors/${vendor.id}/edit` } className = "edit-vendor-link" id = {vendor.id}><Button variant="success" id = {vendor.id} onClick={()=> handleVendorEdit(vendor)}>Edit</Button></Link>
          

          - <button onClick={() => handleDelete(vendor)}>X</button>-{" "}
          <button onClick={handleCount(vendor.id)}>{counts[vendor.id]}</button>
        </ul>
      ))}
      </div>
    </div>
    </Switch>
  );
};

export default connect(null, {EditVendor})(VendorsShow)