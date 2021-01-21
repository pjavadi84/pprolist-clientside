import React, {useState, useEffect } from 'react';
// import Vendor from '../components/Vendor'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { deleteVendor } from '../actions/deleteVendor'
// import { fetchVendors } from '../actions/fetchVendors'
import vendors from './vendors.css'

const VendorsShow = (props) => {
  
  const handleDelete = (vendor) => {
    props.deleteVendor(vendor.id);
  };

  const [counts, setCounts] = useState({}); // <-- initial empty object for counts
  
  // similar to componentDidMount:
  useEffect(() => {
    document.title = `You clicked ${Object.values(counts).reduce(
      (total, { count }) => total + count,
      0
    )} times`;
  });

  // initialize/update state when vendors array changes
  useEffect(() => {
    setCounts(
      props.vendors.reduce(
        (counts, { id }) => ({
          ...counts,
          [id]: 0 // <-- store counts by vendor id
        }),
        {}
      )
    );
  }, [props.vendors]);

  const handleCount = (id) => () =>
    setCounts((counts) => ({
      ...counts,
      [id]: counts[id] + 1 // <-- update specific vendor's count
    }));

  
  return (
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
  );
};

export default VendorsShow