import { useEffect, useState } from 'react';
import './App.css';
import AuthService from './services/authService';
import MessageService from './services/messageService';

function renderMessage(message, currentUser) {
  const isMyMessage = currentUser && (currentUser.uid === message.author?.uid)
  return (
    <div key={message.id} className={isMyMessage ? 'my-message' : 'their-message'}>
      <h2>{message.content}</h2>
      <p>{message.author?.userName || 'someone'}</p>
    </div>
  )
}

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
      {
        user
          ?
          <div>
            Logged in as {user.userName}
            <br />
            <button onClick={AuthService.LogOut}>Log Out</button>
          </div>
          :
          <button onClick={AuthService.LogInWithGoogle}>Log In with Google</button>
      }
      <br />
      <form onSubmit={sendMessage}>
        <input type="text" value={currentMessageContent} onChange={updateMessage} />
        <button onClick={sendMessage}>Send</button>
      </form>
      { messages.map(message => renderMessage(message, user))}
    </div>
  );
}

export default App;
