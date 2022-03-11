const User = class User{
    constructor({id, name, profilePicture, phoneNumber, description, lastMessage, lastMessageTime, lastMessageReaded, possibleConversations, input}){
        this.id = id
        this.name = name
        this.profilePicture = profilePicture,
        this.phoneNumber = phoneNumber,
        this.description = description,
        this.lastMessage = {
            message: lastMessage ?? null,
            time: lastMessageTime ?? null,
            readed: lastMessageReaded ?? false
        }
        this.conversation = []
        this.possibleConversations = possibleConversations ?? []
        this.optionsConversation = []
        this.choiceTime = false,
        this.input = this.choiceTime ? false : input
    }

    setLastMessage(lastMessage){
        this.lastMessage = {
            message: lastMessage,
            time: new Date(),
            readed: false
        }
    }

    setLastMessageReaded(){
        this.lastMessage.readed = true
    }

    setMessage(newMessage){
        this.conversation.push({
            id: newMessage.id,
            direction: newMessage.direction,
            message: newMessage.message,
            sended: newMessage.sended,
            next: newMessage.next,
            options: newMessage.options,
            goTo: newMessage.goTo,
            input: newMessage.input
        })
        this.setLastMessage(newMessage.message)
    }

    setInput(input){
        this.input = input
    }

    getInput(){
        return this.input
    }

    getConversation(){
        return this.conversation ?? []
    }

    getMessagePossibleConversation(messageId){
        let message = this.possibleConversations.find((message) => message.id === messageId)
        if(!message){
            message = this.possibleConversations.find((message) => message.id === 'notFound404')
        }
        return message ?? ''
    }

    getConversationsOptions(idMessage){
        let message = this.possibleConversations.find((message) => message.id == idMessage)
        if(!message){
            message = this.possibleConversations.find((message) => message.id === 'notFound404')
        }
        return message ? message.options : []
    }

    isConversationStarted(){
        return this.conversation.length > 0
    }

    setOptionsConversation(options){
        this.optionsConversation = options
    }

    setChoiceTime(choiceTime){
        this.choiceTime = choiceTime
    }
}

export default User