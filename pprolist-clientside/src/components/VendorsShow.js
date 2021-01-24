import React, {useState, useEffect } from 'react';
// import Vendor from '../components/Vendor'
import { Link } from 'react-router-dom'
import FoundVendor from './FoundVendor';
// import { connect } from 'react-redux'
// import { deleteVendor } from '../actions/deleteVendor'
// import { fetchVendors } from '../actions/fetchVendors'
import vendors from './vendors.css'
// import FoundVendor from '../components/FoundVendor'
// import Vendor from '../components/Vendor'

const VendorsShow = (props) => {
  

  // hooks help creating and manipulating local state independent from the main state without destructing anything from the main state
  // in this case a functionality for the like button 
  const [counts, setCounts] = useState({}); // <-- initial empty object for counts. useState is like setState in class component
//  counts is a variable set to an empty object as the state which useState assign the initial value to the empty object. 
// useEffect below can use this empty object to update values on every re-render.
// inside; in this case, it tries to go over props.vendors which is an array of object, and accumulate those values
// comes from handleCount using this reduce function. 
  

  
  // initialize/update state when vendors array changes. This is similar to lifecycle events such as componentDidMount
  useEffect(() => {    

    setCounts(
      // reduce below is in fact act as our reducer to change/update the local state needs to be re-rendered, the logic that uses counts which is set as an empty object. This empty object acts 
      // as a place to hold and accumulate previous state values using id, which is the amount equal to vendor.id  comes from handleCount 
      props.vendors.reduce((counts, { id }) => ({...counts,[id]: 0 // <-- store counts by vendor id right now its current value set at 0
        }),
        {}
      )
    );

  }, [props.vendors],
  );
  
  
  const handleDelete = (vendor) => {
    props.deleteVendor(vendor.id);
  };
  
  
  
  

  // this handleCount function run setCounts to update the id. 
  // I passed the spread operator to copy the value of counts and add 
  // to the id. useEffect updates whateer inside the object on re-render
  // works like componentDidMount
  
  // STEP 2: handleCount function use setCounts as the dispatch
  const handleCount = (id) => () =>
    setCounts((counts) => ({
      ...counts,
      [id]: counts[id] + 1 // <-- update specific vendor's count
    
    }));

  
  

  // STEP 1: the handleCount function triggered by onClick passing vendor.id.
  return (
    <div>
      <div className="search-vendor">
        <FoundVendor vendor={props} />
      </div>


      <div className="vendor-show-div" style={vendors}>

      {props.vendors.map((vendor) => (
        <ul key={vendor.id}>
          <Link to={`/vendors/${vendor.id}`}>
            {vendor.name}- ${vendor.total_cost}
          </Link>
          - <button onClick={() => handleDelete(vendor)}>X</button>-{" "}
          <button onClick={handleCount(vendor.id)}>{counts[vendor.id]}</button>
        </ul>
      ))}
      </div>
    </div>
    
  );
};

export default VendorsShow