<template>
    <div id="chat-footer" ref="footerChat" class="main-footer sticky bottom-0 right-0 left-0 text-gray-400">
        <template v-if="choiceTime">
            <div class="flex flex-wrap items-center px-4 py-1 m-1">
                <template v-for="option in options" :key="option">
                    <MessageOption class="mx-3 text-center p-1 mb-2" :message="option" :direction="direction"/>
                </template>
            </div>
        </template>
        <template v-else>
            <FooterChatFake />
        </template>
    </div>
</template>

<script>
import MessageOption from '@/components/chat/MessageOption'
import FooterChatFake from '../../../components/chat/FooterChatFake.vue'

export default {
    components: {
        MessageOption,
        FooterChatFake
    },
    props: {
        choiceTime: {
            type: Boolean,
            required: true
        },
        options: {
            type: Object,
            required: () => {
                return this.choiceTime
            }
        },
        direction: {
            type: String,
            default: 'horizontal'
        }
    },
    updated(){
        this.emitter.emit("footer-height-change", this.$refs.footerChat.offsetHeight);
    }
}
</script>
