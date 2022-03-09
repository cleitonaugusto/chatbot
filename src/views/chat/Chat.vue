<template>
    <div id="chat">
        <Header :isOnline="isOnline" :isTyping="isTyping" :user="{id: user.id, name:user.name, profilePicture: user.profilePicture}" />
        <Body :messages="messages" :id="id" :marginBottom="footerSize" />
        <Footer :choiceTime="user.choiceTime" :options="user.optionsConversation" :direction="messageReceived.direction" :input="input"/>
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
            footerSize: 40,
            messageSelected: {},
            messageReceived: {},
            input: false
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
        const elFim = document.querySelector('#fim')

        if(!this.messages.length){
            this.user.setMessage(this.getAFriendMessage('m0'))
            this.isTyping = true
            setTimeout(()=>{
                this.user.setMessage(this.getAFriendMessage('m1'))
                this.isTyping = false
            }, 1000)
        }

        //opção selecionada - mensagem enviada
        this.emitter.on("option-selected", messageSelected => {
            toBottom(elFim.offsetTop)
            this.messageSelected = messageSelected
            const newMessage = this.user.getMessagePossibleConversation(messageSelected.next)
            this.user.setMessage(messageSelected)
            this.pushAFriendMessage(newMessage) //mensagem que eu recebo
            this.user.setChoiceTime(false)

            if(messageSelected.goTo){
                window.open(messageSelected.goTo, '_blank').focus();
            }

        })

        //mensagem recebida
        this.emitter.on("message-received", (message) => {
            toBottom(elFim.offsetTop)

            if(message.message.input.has){
                this.user.setChoiceTime(false)
                this.input = message.message.input
            }else{
                this.messageReceived = message.message
                this.user.setOptionsConversation(message.options)
                this.user.setChoiceTime(true)
            }
        })

        this.emitter.on("footer-height-change", (heigth) => {
            this.footerSize = heigth
        })

        const toBottom = (pos, time) => {
            var currentPos = window.pageYOffset;
            var start = null;
            if(time == null) time = 500;
            pos = +pos, time = +time;
            window.requestAnimationFrame(function step(currentTime) {
                start = !start ? currentTime : start;
                var progress = currentTime - start;
                if (currentPos < pos) {
                    window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
                } else {
                    window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
                }
                if (progress < time) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, pos);
                }
            })
        }

        
    }
}
</script>

<style>
    #chat{
        height: 100vh; 
    }
</style>