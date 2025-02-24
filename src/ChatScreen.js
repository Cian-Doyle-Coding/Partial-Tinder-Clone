import React, {useState} from 'react'
import "./ChatScreen.css";
import { Avatar } from '@mui/material';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState ([
    {
      name: 'Ellen',
      image: '...',
      message: "Whats up"
    },
    {
      name: 'Ellen',
      image: '...',
      message: "Hows it going!"
    },
    {
      message: "Hows it going!",
    }
  ])

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Ellen on 10/10/2024</p>
      {messages.map((message) => 
        message.name ? (
          <div className="chatScreen__image">
          <Avatar
          className="chatScreen__image"
          alt={message.name}
          src={message.image}
          />
          <p className="chatScreen__text">{message.message}</p>
        </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.name}</p>
          </div>
      )
      )}
    

<div >
  <form className="ChatScreen__input">
    <input 
    value={input}
    onChange={e => setInput(e.target.value)}
    className="chatScreen__inputField"
    placeholder="Type a message..."
    type="text" />
    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
  </form>
</div>
</div>
  )
}

export default ChatScreen;
