<template>
    <div class="flex">
        <span><svg class="incoming-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg></span>
        <div class="single-message rounded-tr-lg rounded-bl-lg rounded-br-lg mb-4 px-4 py-2 pb-3" v-html="message.message"></div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    created(){
        const user = this.$store.getters.getUser(this.id)
        const options = user.getConversationsOptions(this.message.id)
        this.emitter.emit("message-received", {message: this.message, options: options})
    }
}
</script>
