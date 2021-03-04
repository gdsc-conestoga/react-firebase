import { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';
import Profile from './components/Profile';
import AuthService from './services/authService';
import MessageService from './services/messageService';

function App() {
  const [messages, setMessages] = useState([])
  const [currentMessageContent, setCurrentMessageContent] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function setMessagesFromDB() {
      const messages = await MessageService.getAllMessages()
      setMessages(messages)
    }

    setMessagesFromDB()
    AuthService.onAuthStateChanged(setUser)
  }, [])

  const updateMessage = (e) => {
    setCurrentMessageContent(e.target.value)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    const newMessage = {
      id: messages.length,
      content: currentMessageContent,
      author: user
    }
    setCurrentMessageContent('')
    await MessageService.sendMessage(newMessage)
    setMessages([...messages, newMessage])
  }

  return (
    <div className="App">
      <h1>Let's talk about Solution Challenge</h1>
      <Profile user={user} />
      <br />
      <form onSubmit={sendMessage} className="message-form">
        <input className="message-input" type="text" value={currentMessageContent} onChange={updateMessage} placeholder="Your message..."/>
        <button onClick={sendMessage} className="button message-button">Send</button>
      </form>
      <div className="message-list">
        { messages.map(message => (<Message message={message} currentUser={user} />)) }
      </div>
    </div>
  );
}

export default App;
