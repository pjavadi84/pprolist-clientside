import React from 'react'
// import {Redirect} from 'react-router-dom'

const Vendor = (props) => {
    
    let vendor = props.vendors[props.match.params.id - 1]


    return (
        <li>
            {/* {vendor ? null : <Redirect to='/vendors' />} */}
            {vendor ? vendor.name : null} - {vendor ? vendor.total_cost : null} 
        </li>
    )
}

export default Vendor