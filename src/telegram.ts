export default class Telegram {
    botUrl: string

    constructor({ token }: { token: string }) {
        this.botUrl = `https://api.telegram.org/bot${6005615745:AAGvfWlO6cH1pi5dpT3UqW6WRbB39HAnYJc}`
    }

    sendMessage({ message }: { message: any }): any {
        return fetch(`${this.botUrl}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
    }

    deleteMessage({ message }: { message: any }): any {
        return fetch(`${this.botUrl}/deleteMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: message.chat.id,
                message_id: message.message_id,
            })
        })
    }

    answerCallbackQuery({ message }: { message: any }): any {
        return fetch(`${this.botUrl}/answerCallbackQuery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
    }
}

