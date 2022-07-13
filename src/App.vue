<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {useStore} from "vuex";
const store = useStore()
const beforeCreate = () => {
  store.dispatch('init')
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {

}
</style>
