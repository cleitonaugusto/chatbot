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
            <FooterChat :input="input" />
        </template>
    </div>
</template>

<script>
import MessageOption from '@/components/chat/MessageOption'
import FooterChat from '../../../components/chat/FooterChat.vue'

export default {
    components: {
        MessageOption,
        FooterChat
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
        },
        input: {
            default: false
        }
    },
    updated(){
        this.emitter.emit("footer-height-change", this.$refs.footerChat.offsetHeight - 68);
    }
}
</script>

<style scoped>
    .mx-3{
        margin-left: 0.4rem;
        margin-right: 0.4rem;
    }
</style>