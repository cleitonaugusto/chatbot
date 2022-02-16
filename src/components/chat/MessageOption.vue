<template>
    <div class="message-option rounded-medium" :class="classObject" @click="chosen">
        {{message.message}}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal'
        }
    },
    methods: {
        chosen(){
            this.emitter.emit("option-selected", this.message);
        }
    },
    computed: {
        classObject(){
            if(this.direction == 'horizontal')
                return 'flex-1'
            return 'flex-row w-100 mt-1 mb-1'
        }
    }
}
</script>