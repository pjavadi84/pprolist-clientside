import React from 'react'
import { connect } from 'react-redux'
import {deleteProduct} from '../actions/deleteProduct'



const ProductsShow = (props) => {
    
    const handleDelete = (product) => {
        props.deleteProduct(product.id, product.vendor_id)
    }

    return (
        
        <div>
            {props.products && props.products.map(product => 
                <div className="product_info" key={product.id} id={product.id}>
                     <h3 id="prod_name_header">{product.name}</h3>
                     <li>Description: {product.description}</li>
                     <li> price: {product.price}</li>
                     <li key={product.kind}> Kind: {product.kind}</li>
                     <li key={product.discount_rate}> discount-rate: {product.discount_rate}</li><br></br>
                     <button onClick={()=> handleDelete(product)}>Delete</button>
                </div>
               
            )}
        </div>
    )
}

export default connect(null, {deleteProduct})(ProductsShow)