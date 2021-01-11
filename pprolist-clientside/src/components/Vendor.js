import React from 'react'

const Vendor = (props) => {
    
    // console.log(props.match.params.id);
    let vendor = props.vendors[props.match.params.id - 1]

    return (
        <li>
           {vendor ? vendor.name : null} - {vendor ? vendor.total_cost : null} 
        </li>
    )
}

export default Vendor