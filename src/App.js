import React from 'react';
import './App.css';
import MessageName from './components/MessageName';
import Name from './components/Name';
import Qualities from './components/Qualities';


class App extends React.Component {
  qualities = [
    {value: "quality1", id:1},
    {value: "quality2", id:2},
    {value: "quality3", id:3},
    {value: "quality4", id:4}
];
  render = () => {
    return (
      <div className="App">
        <Name />
        <MessageName />
        <Qualities qualities={this.qualities} key={this.qualities.id}/>
      </div>
    )
  }
}

export default App;

