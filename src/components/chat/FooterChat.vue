<template>
    <div class="flex items-center px-4 py-1">
        <div class="flex-grow">
            <div class="px-4 py-2 w-full">
                <div class="relative text-gray-600 focus-within:text-gray-200">
                    <template v-if="input.has">
                        <template v-if="input.select">
                            <select class="message-input w-full py-3 text-sm rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900" v-model="inputData">
                                <option value="">Escolha a vara do trabalho</option>
                                <template v-for="option in input.options" :key="option">
                                    <option :value="option.id">{{option.descricao}}</option>
                                </template>
                            </select>
                        </template>                    
                        <template v-else>
                            <input type="text" v-model="processo" class="message-input w-full py-3 text-sm text-white rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900" :placeholder="input.placeholder">
                        </template>
                    </template>
                    <template v-else>
                        <input type="text" class="disabled message-input w-full py-3 text-sm text-white rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Digite uma mensagem" autocomplete="off" disabled>
                    </template>
                </div>
            </div>
        </div>
        <div class="flex-none text-right text-white">
            <img src="../../assets/img/send.png" style="width: 24px;margin-right: .5em;" @click="sendMessage">
        </div>
    </div>
</template>

<script type="module">
import Message from './../../entities/message'

export default {
    props: {
        input: {
            required: false,
            default: undefined
        }
    },
    data(){
        return {
            inputData: "",
            processo: ""
        }
    },
    methods: {
        sendMessage(){
            if(this.input){
                const messageSelected = this.input.options.find(message => message.id === this.inputData)
                this.emitter.emit("option-selected", new Message({
                    id: `opt${this.inputData}`,
                    message: messageSelected.descricao,
                    sended: true,
                    next: messageSelected.next
                }));
            }
        }
    }
}
</script>

<style scoped>
    input.disabled {
        background: #dbdbdb;
    }
</style>