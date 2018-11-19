import React, { Component } from 'react';
import './App.css';
import GetHeader from './Header/GetHeader'
import GetFooter from './Footer/GetFooter'
import GetMainData from './MainData/GetMainData'


class App extends Component {
  render() {
    return (
      <div className="App">
          <GetHeader/>
          <GetMainData/>
          <GetFooter/>
      </div>
    );
  }
}

export default App;
