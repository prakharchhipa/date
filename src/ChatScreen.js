import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState([

    ]);
    const [messages, setMessages] = useState([
        {
            name:'Sachin Tendulkar',
            image:'https://s3.india.com/wp-content/uploads/2020/07/sachin-tendulkar-1.jpg',
            message:'Hey there, can we talk?'
        },
        {
            name:'Sachin Tendulkar',
            image:'https://s3.india.com/wp-content/uploads/2020/07/sachin-tendulkar-1.jpg',
            message:'I\'ll take only 2 minutes'
        },
        {
            message:'Do I know you?'
        },
        {
            name:'Sachin Tendulkar',
            image:'https://s3.india.com/wp-content/uploads/2020/07/sachin-tendulkar-1.jpg',
            message:'Consider me someday!'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message : input}]);
        setInput('');
    };
    return (
        <div className="chatScreen">
            <p className="chatScreen__head">You matched with Sachin on 01/08/2020</p>
            {messages.map(message =>(
                message.name ?
                    (
                        <div className="chatScreen__message">
                            <Avatar
                                className="chatScreen__icon"
                                src={message.image}
                                alt={message.name}
                            />
                            <p className="chatScreen__text" >{message.message}</p>
                        </div>
                    ) :
                    (
                        <div className="chatScreen__message">
                            <p className="chatScreen__text__byMe" >{message.message}</p>
                        </div>
                    )

            ))}


            <form  className="chatScreen__inputForm">
                <input value={input} onChange={ e => setInput(e.target.value)} className="chatScreen__inputBox" type="text" placeholder="Type a message.."/>
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
            </form>

        </div>
    );
}

export default ChatScreen;