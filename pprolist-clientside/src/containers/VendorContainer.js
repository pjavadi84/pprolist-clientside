import React, { Component } from 'react';
import { connect } from 'react-redux'
import VendorForm from '../components/VendorForm'
import VendorsShow from '../components/VendorsShow'
import {fetchVendors} from '../actions/fetchVendors'


class VendorContainer extends Component {
    componentDidMount(){
        fetchVendors()
    }

    render() {
        return (
            <div>
               VendorContainer:
                <div className="vendor">
                    <VendorForm />
                    <VendorsShow />
                </div>
            </div>
        );
    }


}

// To see things
const mapStateToProps = state => {
    return {
        vendors: state.vendors
    }
}
  
export default connect(mapStateToProps)(VendorContainer)
  