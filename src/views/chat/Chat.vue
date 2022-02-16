<template>
    <div id="chat">
        <Header :isOnline="isOnline" :isTyping="isTyping" :user="{id: user.id, name:user.name, profilePicture: user.profilePicture}" />
        <Body :messages="messages" :id="id" />
        <Footer :choiceTime="user.choiceTime" :options="user.optionsConversation" :direction="messageReceived.direction"/>
    </div>
</template>

<script>
import Header from './template/Header.vue'
import Body from './template/Body.vue'
import Footer from './template/Footer.vue'

export default {
    name: 'Chat',
    components: {
        Header, Body, Footer
    },
    methods:{
        getAFriendMessage(id){ //pega uma mensagem possível de conversa pelo id
            return this.user.getMessagePossibleConversation(id)
        },
        randomTime(min, max) {
            return Math.random() * (max - min) + min;
        },
        pushAFriendMessage(message){
            setTimeout(() => { //timeout para simular interação humana
                this.isTyping = true
                setTimeout(() => {
                    this.isTyping = false
                    this.user.setMessage(message)
                }, this.randomTime(500, 2000));
            }, this.randomTime(500, 2000))
        }
    },
    data(){
        return{
            isOnline: true,
            isTyping: false,
            id: 0,
            messageSelected: {},
            messageReceived: {}
        }
    },
    computed: {
        user(){
            return this.$store.getters.getUser(this.id)
        },
        messages(){
            return this.user.getConversation() 
        }
    },
    mounted(){
        if(!this.messages.length){
            this.user.setMessage(this.getAFriendMessage('m0'))
            this.isTyping = true
            setTimeout(()=>{
                this.user.setMessage(this.getAFriendMessage('m1'))
                this.isTyping = false
            }, 1000)
        }

        this.emitter.on("option-selected", messageSelected => {
            this.messageSelected = messageSelected
            const newMessage = this.user.getMessagePossibleConversation(messageSelected.next)
            this.user.setMessage(messageSelected)
            this.pushAFriendMessage(newMessage) //mensagem que eu recebo
            this.user.setChoiceTime(false)
        })

        this.emitter.on("message-received", (message) => {
            this.messageReceived = message.message
            this.user.setOptionsConversation(message.options)
            this.user.setChoiceTime(true)
        })
    }
}
</script>

<style>
    #chat{
        height: 100vh; 
    }
</style>