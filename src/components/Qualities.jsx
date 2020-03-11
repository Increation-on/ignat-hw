import React from 'react';
import '../App.css';
import './Qualities.css';
import Qualitie from './Qualitie';

class Qualities extends React.Component {  
    render = () => {
        let qualitiesElements = this.props.qualities.map((qualitie)=>{
            return <Qualitie value={qualitie.value} id={qualitie.id}/>
        });    
        return (
            <div className="qualities">
                {qualitiesElements}
            </div>
        )
    }
}

export default Qualities;

