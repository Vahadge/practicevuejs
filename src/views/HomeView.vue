<template>
  <div class="parent relative z-50">
    <div class="z-50 absolute">
      <SidebarNav></SidebarNav>
    </div>
    <div class="top-20 w-full">
      <div class="w-full flex justify-center">
        <Breadcrumb :breadcrumblinks="JSON.stringify(routes)"></Breadcrumb>
      </div>

      <div class="grid grid-flow-row lg:grid-flow-col m-10">
        <div
          class="bg-gradient-to-t from-red-100 to-pink-50 max-w-full w-full lg:w-11/12 flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-4 bg-gray-100"
        >
          <div>
            <a href="#">
             
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <RouterLink to='/ConfigurationManagement'>Configuration management</RouterLink>
              </h5>
            </a>
          </div>
        </div>
        <div
          class="bg-gradient-to-t from-red-100 to-pink-50 max-w-full w-full lg:w-11/12 flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-4 bg-gray-100"
        >
          <div class="">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Income/Expense
              </h5>
            </a>
           
            
          </div>
        </div>
        <div
          class="bg-gradient-to-t from-red-100 to-pink-50 max-w-full w-full lg:w-11/12 flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-4 bg-gray-100"
        >
          <div class="">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Order tracking
              </h5>
            </a>
           
            
          </div>
        </div>
      </div>
      <div class="z-10">
        <div class="grid m-10 sm:grid-flow-row lg:grid-flow-col">
          <div class="w-full lg:w-11/12 sm:grid-rows-1 sm:min-w-[400px]">
            <LeadsChart chartwidth="100%" charttype="sales" />
          </div>
          <div class="sm:grid-rows-1 sm:min-w-[400px]">
            <LeadsChart chartwidth="100%" charttype="totprotductslast3months" />
          </div>
          <div class="sm:grid-rows-1 sm:min-w-[400px]">
            <LeadsChart chartwidth="100%" charttype="incomeexpense" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarNav from '@/components/SidebarNav.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import LeadsChart from '@/components/DashboardChart.vue'

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
</script>
