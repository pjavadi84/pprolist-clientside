import React, { Component } from 'react';
import { connect } from 'react-redux'
import VendorForm from '../components/VendorForm'
import VendorsShow from '../components/VendorsShow'
import { fetchVendors } from '../actions/fetchVendors'
import { deleteVendor } from '../actions/deleteVendor'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Vendor from '../components/Vendor'
import About from '../static/About'
import FoundVendor from '../components/FoundVendor';
// import EditVendor from '../components/VendorEdit'

// import NavBar from '../components/NavBar'


class VendorContainer extends Component {

    componentDidMount() {
        this.props.fetchVendors();
    }

    render() {
        return (
                <div>
                    <br></br>
                    <div className="vendor">
                        <Switch>
                            <Route path='/vendors/new' component={VendorForm} />
                            <Route path='/vendors/:id' render={(routerProps) => <Vendor {...routerProps} vendors={this.props.vendors} />} />
                            <Route path='/vendors' render={(routerProps) => {
                                return this.props.vendors && this.props.vendors.length ?
                                <VendorsShow {...routerProps} vendors={this.props.vendors} deleteVendor={this.props.deleteVendor} render={()=><FoundVendor />} />
                                : <VendorForm  {...routerProps} addVendor = { this.props.addVendor } />
                            }} />
                            <Route path='/About' component={About} />
                            {/* <Route path="/vendors/:id/edit" render={()=><VendorEdit />} /> */}
                            {/* <Route path="/vendors/:id/edit" render={(routerProps)=> <EditVendor {...routerProps} vendors={this.props.vendors} />} /> */}
                        </Switch>
                    </div>  
                </div>
        );
    }
}

// To see things: pretty much to make a copy of the state and passing props to components that needs it
// connect helps those attributes that used in this component such as fetchBendors and deleteVendors to pass 
// these props and use them to send to action creators, for example, which can later dispatch an action type with
// props as payload to reducer. Reducer then listen to those actions and make updates to the state
const mapStateToProps = state => {
    return {
        vendors: state.vendors
    }
}

export default connect(mapStateToProps, { fetchVendors, deleteVendor })(VendorContainer)
