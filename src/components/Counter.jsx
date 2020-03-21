import React from 'react';
import "./Counter.css";

class Counter extends React.Component {

    spanValue = React.createRef();
    inputValue = React.createRef();
    
    
    onClickCounter = ()=>{
        let currentNumber = +this.spanValue.current.textContent;
        this.spanValue.current.textContent = ++currentNumber;
        let name = this.inputValue.current.value;
        if(!name){
            alert("please enter name");
            return;
        }
        this.inputValue.current.value = "";
        alert(`hello ${name}`);
    }
  
    render = () => {  
         
    return (     
        <div className="counter">
            <span ref={this.spanValue}>1</span>
            <input type="text" ref={this.inputValue}/>
            <button onClick={this.onClickCounter}>click</button>
        </div>
    )
  }
}

export default Counter;

