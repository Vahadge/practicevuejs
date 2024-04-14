<template>
  <div class="parent relative z-50">
    <div class="z-50 absolute">
      <SidebarNav />
    </div>
    <div class="top-20 w-full">
      <div class="w-full flex justify-center">
        <Breadcrumb :breadcrumblinks="JSON.stringify(routes)"></Breadcrumb>
      </div>
      <div class="configurationtabs">
        <configurationtabs/>
      </div>
    </div>
  </div>
</template>
<script setup>
import SidebarNav from '../components/SidebarNav.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import configurationtabs from '../components/configurationmanagement/configurationtabs.vue'
import { ref } from 'vue'

const routes = ref([
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'About',
    to: '/about'
  },
  {
    name: 'Login',
    to: '/login'
  },
  {
    name: 'Configuration',
    to: '/Configurationmanagement'
  }
])


</script>
