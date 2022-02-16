const Message = class Message{
    constructor({id, message, sended, next, options, typingMin, typingMax, goTo, direction, acceptInput, autoCompleteOptions}){
        this.direction = direction ?? 'horizontal'
        this.id = id
        this.message = message
        this.sended = sended ?? false
        this.next = next ?? null
        this.options = options ? options : []
        this.typingMin = typingMin ?? 500
        this.typingMax = typingMax ?? 2000
        this.goTo = goTo ?? null
        this.acceptInput = acceptInput ?? false
        this.autoCompleteOptions = autoCompleteOptions ?? []
    }
}

export default Message