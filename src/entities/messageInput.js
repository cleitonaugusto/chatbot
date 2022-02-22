const MessageInput = class MessageInput{
    constructor({has, placeholder, processMask, autoCompleteOptions}){
        this.has = has ?? false
        this.placeholder = placeholder ?? ''
        this.autoCompleteOptions = autoCompleteOptions ?? []
        this.processMask = processMask ?? false
    }
}

export default MessageInput