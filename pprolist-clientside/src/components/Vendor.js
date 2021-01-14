import React from 'react'
import ProductContainer from '../containers/ProductContainer'
// import {Redirect} from 'react-router-dom'

const Vendor = (props) => {
    // let vendor = props.vendors[props.match.params.id - 1]
    let vendor = props.vendors.filter(vendor => vendor.id == props.match.params.id)[0]

    // The blow variable doesn't render any vendor if the id explicitly entered in address bar. It is
    // better for the user experience to use the above variable
    // let vendor = props.vendors.filter(vendor => vendor.id == props.match.params.id)

    return (
        <div>
            <h1>
                {vendor ? vendor.name : null}  
            </h1>
            <h3>Total cost: {vendor ? vendor.total_cost : null} </h3>
            
            <ProductContainer vendor={vendor}/>
        </div>
       
    )
}

export default Vendor