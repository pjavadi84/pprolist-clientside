import React from 'react'

const ProductsShow = (props) => {
    return (
        
        <div>
            {props.products && props.products.map(product => 
                <div key={product.id} className="product_name" id={product.id}>
                     <h3 key={product.name} id="prod_name_header">{product.name}</h3>
                     <li key={product.description}>Description: {product.description}</li>
                     <li key={product.price}> price: {product.price}</li>
                     <li key={product.kind}> Kind: {product.kind}</li>
                     <li key={product.discount_rate}> discount-rate: {product.discount_rate}</li><br></br>
                </div>
               
            )}
        </div>
    )
}

export default ProductsShow