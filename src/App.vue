

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MainTabBar from "./components/content/MainTabBar.vue";
// import {computed, defineComponent, onMounted, reactive, ref} from "vue";
</script>

<template>
<!--  <img alt="Vue logo" src="@/assets/logo.png"/>-->
  <router-view></router-view>
  <main-tab-bar></main-tab-bar>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}
</style>
