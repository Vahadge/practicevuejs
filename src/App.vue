<template>
  <div class="z-10 w-full">
    <Navbar />
  </div>
  <div class="z-9">
    <RouterView />
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Breadcrumb from './components/Breadcrumb.vue'

</script>
