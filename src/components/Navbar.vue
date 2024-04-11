<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="bg-gray-800 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center z-9999">
    <div class="flex items-center">
      <span class="text-green-500 text-xl mr-1">
        <i class="fa-solid fa-message"></i>
      </span>

      <h1 class="text-xl">Designer</h1>
    </div>

    <span
      @click="ToggleMainNav"
      id="nav-toggle"
      class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl"
    >
      X
    </span>

    <ul
      class="md:flex md:items-center md-px-0 px-3 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-500 ease-in"
      :class="navtoggle ? 'left-0' : 'left-[-100%]'"
    >
      <li class="md:mx-4 md:my-0 my-6" v-for="route in routes" :key="route">
        <!-- <a :href="route.to" class="text-xl hover:text-green-500">{{ route.name }}</a> -->
        <RouterLink :to="route.to">{{ route.name }}</RouterLink>
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <!-- <a :href="route.to" class="text-xl hover:text-green-500">{{ route.name }}</a> -->
        <span class="text-xl text-gray-400 text-center" @click="OpenSecondLevelNav($event)" data-id="multilevel1"> Multilevel </span>
        <ul id="multilevel1_child" data-parantid="multilevel1" class="hidden pt-1 md:items-center md-px-0 px-3 md:pb-0 pb-10 bg-gray-600 md:w-auto
         text-gray-50 lg:absolute rounded lg:mt-3">
          <li class="md:mx-4 md:my-0 my-6">Sub menu 1</li>
          <li class="md:mx-4 md:my-0 my-6">Sub menu 2</li>
          <li class="md:mx-4 md:my-0 my-6">Sub menu 3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

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
let navtoggle = ref(true)

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
