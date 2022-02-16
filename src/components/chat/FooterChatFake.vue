<template>
    <div class="flex items-center px-4 py-1">
        <div class="flex-grow">
            <div class="px-4 py-2 w-full">
                <div class="relative text-gray-600 focus-within:text-gray-200">
                    <input type="text" class="message-input w-full py-3 text-sm text-white rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Digite uma mensagem" autocomplete="off" disabled>
                </div>
            </div>
        </div>
        <div class="flex-none text-right text-white">
            <svg class="inline w-6 h-6 -mt-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>