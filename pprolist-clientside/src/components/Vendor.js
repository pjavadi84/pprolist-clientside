import React from 'react'
import ProductContainer from '../containers/ProductContainer'
// import {Redirect} from 'react-router-dom'



const Vendor = (props) => {
    console.log("im here")
    
    let vendor = props.vendors.filter(v => v.id == props.match.params.id)[0]
    

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