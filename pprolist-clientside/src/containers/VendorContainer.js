import React, { Component } from 'react';
import { connect } from 'react-redux'
import VendorForm from '../components/VendorForm'
import VendorsShow from '../components/VendorsShow'
import {fetchVendors} from '../actions/fetchVendors'
import {Route, Switch} from 'react-router-dom'
import Vendor from '../components/Vendor'
import About from '../static/About'

// import NavBar from '../components/NavBar'


class VendorContainer extends Component {
    componentDidMount(){
        this.props.fetchVendors()
    }

    render() {
        return (
            <div>
                <div className="vendor">
                    
                    <Switch>
                        <Route path='/vendors/new' component={VendorForm}/>
                        <Route path='/vendors/:id' render={(routerProps) => <Vendor {...routerProps} vendors={this.props.vendors} /> } />
                        <Route path='/vendors' render={(routerProps) => <VendorsShow {...routerProps} vendors={this.props.vendors} /> } />
                        <Route path='/About' component={About} />
                    </Switch>  
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
  
export default connect(mapStateToProps, {fetchVendors})(VendorContainer)
  