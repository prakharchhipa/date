import React from 'react';
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Lionel Messi"
                message="LaLa"
                timestamp="1 minute ago"
                profilePicture="https://images.hdqwalls.com/download/lionel-messi-5k-2018-1i-1920x1080.jpg"
            />
            <Chat
                name="Cristiano Ronaldo"
                message="Why you hate me?"
                timestamp="10 minutes ago"
                profilePicture="https://images.jagran.com/naidunia/ronaldo_crying_17_09_2019.jpg"
            />
            <Chat
                name="Sachin Tendulkar"
                message="Consider me someday!"
                timestamp="1 day ago"
                profilePicture="https://s3.india.com/wp-content/uploads/2020/07/sachin-tendulkar-1.jpg"
            />
        </div>
    );
}

export default Chats;