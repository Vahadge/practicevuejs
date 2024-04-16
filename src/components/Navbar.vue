<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="bg-gray-800 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center
  bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 opacity-90
  sm:bg-black" :class="[navtoggle ? 'h-auto ease-in' : 'h-12']">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <span class="text-green-500 text-xl mr-1">
        <i class="fa-solid fa-message"></i>
      </span>
      <h1 class="text-xl text-white"><a href="https://ifloo360.net">Powered by Ifloo360</a></h1>
     
    </div>
    <button @click="ToggleMainNav" id="nav-toggle" data-collapse-toggle="navbar-default" type="button" 
    class="justify-center text-sm text-gray-200  
         dark:text-gray-400
        dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden transition-all" 
        aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    
    



    <ul
      class="navbartop grid lg:grid-flow-col grid-flow-row duration-1000 lg:scale-100 sm:ease-in-out sm:scale-50
      "
      :class="navtoggle ? 'left-0 relative' : 'left-[-100%] sm:ease-in-out'"
    >
      <li class="sm:my-2 mt-6 text-center md:mx-4  hover:text-gray-300 
      " v-for="route in routes" :key="route">
        <!-- <a :href="route.to" class="text-xl hover:text-green-500">{{ route.name }}</a> -->
        <span class=" text-xl text-white-400 text-center cursor-pointer hover:text-gray-300" :id="'navitem_' +route.name" ><RouterLink :to="route.to">{{ route.name }}</RouterLink></span>
      </li>
      <li class="md:mx-4 md:my-0 my-6 hidden">
        <!-- <a :href="route.to" class="text-xl hover:text-green-500">{{ route.name }}</a> -->
        <span class="text-xl text-white-400 text-center cursor-pointer hover:text-gray-300" @click="OpenSecondLevelNav($event)" data-id="multilevel1"> Miscellaneous </span>
        <ul id="multilevel1_child" data-parantid="multilevel1" class="
        hidden cursor-pointer pt-1 md:items-center md-px-0 px-3 md:pb-0 pb-10  md:w-auto
         text-gray-50 lg:text-black lg:bg-blue-100 lg:absolute rounded lg:mt-3">
          <li class="md:mx-4 md:my-0 my-6">Integrations</li>
          <li class="md:mx-4 md:my-0 my-6">Sub menu 2</li>
          <li class="md:mx-4 md:my-0 my-6">Sub menu 3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style>
.router-link-exact-active
{
  @apply text-gray-100
}
</style>
<script setup>
import { ref, computed, onMounted, defineExpose } from 'vue'



const count = ref(0)
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
  }
])
let navtoggle = ref(false)

function ToggleMainNav() {
  navtoggle.value = !navtoggle.value
}

function OpenSecondLevelNav(event)
{
    console.log(event.target.getAttribute('data-id'));
    let id = event.target.getAttribute('data-id');
   
  document.getElementById(id + '_child').classList.toggle('hidden')
}

</script>
