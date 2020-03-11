import React from 'react';
import '../App.css';
import './MessageName.css';


class MessageName extends React.Component {  
    render = () => {    
        return (
            <div className="message-name">
                   <div className="message-block">
                        <div className="name">Maksim Dudarev</div>
                        <div className="text">Text text text text text text text text text text text text text text text text text text text text text
                        text
                        text
                        text
                        text
                        text
                        text
                        text
                        text
                        text
                        text
                        text
                        text
                        text</div>
                        <div className="time">20:00</div>
                        <div className="block"></div>
                   </div>
            </div>
        )
    }
}

export default MessageName;

