import React from 'react';
import './Qualitie.css';
class Qualitie extends React.Component {
    render = () => {
       let a = this.props.value === "qualitie2" ? "highlited" : "qualitie";
        return (
            <div className={a}>
                <span>{this.props.value}</span>
            </div>
        );
    }
}

export default Qualitie;