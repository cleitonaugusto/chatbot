<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeInLeft animate__faster" leave-active-class="animate__animated animate__fadeOutRight animate__faster" mode="out-in">
      <keep-alive include="Chat">
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
