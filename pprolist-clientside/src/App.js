import React from 'react'
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {fetchVendors} from './actions/fetchVendors'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchVendors({type: 'FETCH_VENDORS', payload: {name: "Costco"}})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
      </div>
    );
  }
  
}




export default connect(null, {fetchVendors})(App);
