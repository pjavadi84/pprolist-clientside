import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import VendorContainer from './containers/VendorContainer'
// import About from '../src/static/About'

class App extends React.Component {

  render(){
    return (
      <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80")`}}>
        <div className="App">
          <header className="App-header">
            <VendorContainer />
          </header>
        </div>
      </div>
    );
  }
  
}




export default App;
