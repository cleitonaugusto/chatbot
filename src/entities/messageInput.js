const MessageInput = class MessageInput{
    constructor({has, placeholder, processMask, options, select}){
        this.has = has ?? false
        this.placeholder = placeholder ?? ''
        this.options = options ?? []
        this.processMask = processMask ?? false
        this.select = select ?? false
    }
}

export default MessageInput