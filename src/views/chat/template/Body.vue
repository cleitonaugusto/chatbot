<template>
    <div id="chat-body" class="main-messages bg-chat block px-4 py-3">
        <div id="chat-content">
            <template v-for="message in messages" :key="message.id">
                <Sended class="animate__animated animate__fadeIn" v-if="message.sended" :message="message.message"></Sended>
                <Received class="animate__animated animate__fadeIn" v-else :message="message" :id="id"></Received>
            </template>
        </div>
    </div>
</template>

<script>
import Sended from '@/components/chat/Sended'
import Received from '@/components/chat/Received'

export default {
    props: ['messages', 'id'],
    components:{
        Sended, Received
    }
}
</script>

<style>
    #chat-body{
        min-height: 100vh;
        padding-bottom: 5em;
    }
    #chat-content{
        margin-top: 68px;
        margin-bottom: 40px;
    }
</style>

