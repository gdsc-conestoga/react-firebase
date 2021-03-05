import firebase from 'firebase'

export default class MessageService {
    static subscribeToMessages(callback) {
        const db = firebase.firestore()
        db.collection('messages').orderBy('timestamp').onSnapshot(snap => {
            const messages = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            callback(messages)
        })
    }

    static async sendMessage(message) {
        const db = firebase.firestore()
        await db.collection('messages').add(message)
    }
}