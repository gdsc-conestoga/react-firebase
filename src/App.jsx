import { useState } from 'react';
import './App.css';

function renderMessage(message) {
  return (
    <div key={message.id}>
      <h2>{message.content}</h2>
      <p>{message.author}</p>
    </div>
  )
}

function App() {
  const [messages, setMessages] = useState([])
  const [currentMessageContent, setCurrentMessageContent] = useState('')

  const updateMessage = (e) => {
    setCurrentMessageContent(e.target.value)
  }

  const sendMessage = () => {
    const newMessage = {
      id: messages.length,
      content: currentMessageContent,
      author: 'someone'
    }
    setMessages([...messages, newMessage])
  }


  return (
    <div className="App">
      <h1>Let's talk about Solution Challenge</h1>
      <input type="text" onChange={updateMessage}/>
      <button onClick={sendMessage}>Send</button>
      { messages.map(renderMessage)}
    </div>
  );
}

export default App;
