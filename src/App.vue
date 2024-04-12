<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="z-9999 w-full">
  <Navbar /></div>
  <div class="z-100 ">
    <RouterView /></div>
</template>
