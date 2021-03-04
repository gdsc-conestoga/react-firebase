export default class MessageService {
    static getAllMessages() {
        return new Promise((resolve, reject) => resolve([]))
    }

    static sendMessage(message) {
        return new Promise((resolve, reject) => resolve(true))
    }
}