import React from 'react'
import './Message.css'

export default function Message(props) {
    const isMyMessage = props.currentUser && (props.currentUser.uid === props.message.author?.uid)
    return (
        <div key={props.message.id} className={'Message ' + (isMyMessage ? 'my-message' : 'their-message')}>
            <h2>{props.message.content}</h2>
            <p>{props.message.author?.userName || 'someone'}</p>
        </div>
    )
}
