import React from 'react'
import ProductContainer from '../containers/ProductContainer'
// import {Redirect} from 'react-router-dom'

const Vendor = (props) => {
    
    let vendor = props.vendors[props.match.params.id - 1]


    return (
        <div>
            <h1>
                {vendor ? vendor.name : null} - {vendor ? vendor.total_cost : null} 
            </h1>
            
            <ProductContainer vendor={vendor}/>
        </div>
       
    )
}

export default Vendor