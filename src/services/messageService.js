import firebase from 'firebase'

export default class MessageService {
    static listenForMessages(callback) {
        firebase.firestore().collection('messages').orderBy('timestamp').onSnapshot(snap => {
            const messages = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            callback(messages)
        })
        // MessageService.messagesStateCallback = callback
    }

    static async sendMessage(message) {
        await firebase.firestore().collection('messages').add(message)
        // await new Promise((resolve, reject) => resolve(true))
        // MessageService.messages = MessageService.messages ?? []
        // MessageService.messages.push(message)
        // MessageService.messagesStateCallback(MessageService.messages)
    }
}