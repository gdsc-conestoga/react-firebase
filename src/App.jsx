import { useState } from 'react';
import './App.css';

function renderMessage(message, currentUser) {
  const isMyMessage = (currentUser !== null) && (currentUser.uid === message.author?.uid)
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

  const updateMessage = (e) => {
    setCurrentMessageContent(e.target.value)
  }

  const sendMessage = () => {
    const newMessage = {
      id: messages.length,
      content: currentMessageContent,
      author: user
    }
    setMessages([...messages, newMessage])
  }

  const handleLogIn = () => {
    setUser({
      uid: '1234qwer',
      userName: 'user3000'
    })
  }

  const handleLogOut = () => {
    setUser(null)
  }

  return (
    <div className="App">
      <h1>Let's talk about Solution Challenge</h1>
      {
        user
          ? <div>
            Logged in as {user.userName}
            <br />
            <button onClick={handleLogOut}>Log Out</button>
          </div>
          : <button onClick={handleLogIn}>Log In with Google</button>
      }
      <br />
      <input type="text" onChange={updateMessage} />
      <button onClick={sendMessage}>Send</button>
      { messages.map(message => renderMessage(message, user))}
    </div>
  );
}

export default App;
