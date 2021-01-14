import React from 'react'
// import logo from './logo.svg';
import './App.css';
import VendorContainer from './containers/VendorContainer'
// import About from '../src/static/About'

class App extends React.Component {

  componentDidMount(){
  }

  render(){
    return (

      <div className="App">
        <header className="App-header">
          <VendorContainer />
          
        </header>
      </div>
    );
  }
  
}




export default App;
