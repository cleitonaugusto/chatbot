<template>
    <div id="chat-header" class="main-header z-40 sticky top-0 right-0 left-0 text-gray-400">
        <div class="flex items-center px-4 py-3">
         <div class="flex-auto">
            <div class="flex">
                <div class="flex-row ml-3 mr-4">
                    <div class="flex">
                        <img class="w-11 h-11 rounded-full" :src="user.profilePicture">
                    </div>
                </div>
                <div>
                    <div class="text-md font-bold text-white">{{ user.name }}</div>
                    <div class="text-sm text-gray-300">{{ isOnline ? (isTyping ? 'Está digitando...' : 'Online') : 'Offline' }}</div>
                </div>
            </div>
         </div>
         <div class="flex-auto text-right">
         </div>
       </div>
    </div>
</template>

<script>
export default {
    props: {
        isOnline: {
            type: Boolean,
            required: true
        },
        isTyping: {
            type: Boolean,
            required: true
        },
        user:{
            type: Object,
            required: true
        }
    }
}
</script>