import React, { Component } from 'react';
import ProductForm from '../components/ProductForm'
import ProductsShow from '../components/ProductsShow'

class ProductContainer extends Component {
    render() {
        return (
            <div>
                <ProductForm vendor={this.props.vendor} />
                <ProductsShow products={ this.props.vendor && this.props.vendor.products} />
            </div>
        );
    }
}

export default ProductContainer;