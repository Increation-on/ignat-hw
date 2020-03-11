import React from 'react';
import './Qualitie.css';
class Qualitie extends React.Component {
    render = () => {
        return (
            <div className="qualitie">
                 <span>{this.props.value}</span>      
            </div>
        );
    }
}

export default Qualitie;