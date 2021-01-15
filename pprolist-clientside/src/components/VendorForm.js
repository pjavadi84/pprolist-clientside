import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addVendor} from '../actions/addVendor'
import { withRouter } from "react-router";


class VendorForm extends Component {

    
    state = {
        name:'',
        total_cost: ''
    }


    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addVendor(this.state)
        // this.forceUpdate()
        this.setState({
            name:'',
            total_cost: ''
        })
        this.props.history.push('/vendors');
    }
    
    render() {
        return (
            <div>
                <h1>Vendor's Form:</h1>
                <p>Enter company information you want record information to save on your vendor's list:</p>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Vendor Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleOnChange} name="name" placeholder="shopping center name" /><br></br>
                    <label>Cart amount: </label>
                    <input type="number" min="0" value={this.state.total_cost} onChange={this.handleOnChange} name="total_cost" placeholder="enter starting balance"/><br></br>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

const vendorFormWithRouter = withRouter(VendorForm)
// export default connect(null,{addVendor})(VendorForm);
export default connect(vendorFormWithRouter,{addVendor})(VendorForm);