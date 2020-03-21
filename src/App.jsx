import React from 'react';
import './App.css';
import MessageName from './components/MessageName';
import Name from './components/Name';
import Qualities from './components/Qualities';
import Counter from './components/Counter';


class App extends React.Component {
  qualities = [
    {value: "qualitie1"},
    {value: "qualitie2"},
    {value: "qualitie3"},
    {value: "qualitie4"}
];
  render = () => {
    return (
      <div className="App">
        <Name />
        <MessageName />
        <Qualities qualities={this.qualities}/>
        <Counter/>
      </div>
    )
  }
}

export default App;

