export default class MessageService {
    static listenForMessages(callback) {
        MessageService.messagesStateCallback = callback
    }

    static async sendMessage(message) {
        await new Promise((resolve, reject) => resolve(true))
        MessageService.messages = MessageService.messages ?? []
        MessageService.messages.push(message)
        MessageService.messagesStateCallback(MessageService.messages)
    }
}