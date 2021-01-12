import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addProduct } from '../actions/addProduct';

class ProductForm extends Component {
    state = {
        name: '',
        description: '',
        kind:'standard',
        price:'',
        discount_rate: '0'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state, this.props.vendor.id)
        this.setState({
            name: '',
            description: '',
            kind:'standard',
            price:'',
            discount_rate: '0'
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br></br>
                    
                    <label>Price:</label>
                    <input type="number" min="1" name="price" value={this.state.price} onChange={this.handleChange} /><br></br>

                    <label>Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /><br></br>

                    <label>Select if this product is discounted:</label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>standard</option>
                        <option>discount</option>
                    </select><br></br>

                    <label>discount rate:</label>
                    <input type="number" name="discount_rate" min="0.00" max="0.80" step="0.01" placeholder="discount rate" value={this.state.discount_rate} onChange={this.handleChange} /><br></br>
                    
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect (null, {addProduct})(ProductForm);