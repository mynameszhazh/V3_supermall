

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MainTabBar from "./components/content/MainTabBar.vue";
// import {computed, defineComponent, onMounted, reactive, ref} from "vue";
</script>

<template>
  <!-- 问题保留，这里使用keep-alive 不能排除我不想要缓存的route 这样，真的是有点那个了 -->
  <!-- <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view> -->
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
