import {defineStore} from 'pinia'

import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', ()=> {
    
    const isAuthenticated = ref(true);
    const user = ref({
        name: 'John Doe',
        email: 'j@j.com'
    });

    function logout(){
        
        
        isAuthenticated.value = false
        user.value = null;
    };


    const  IsEmployeeLoggedIn = computed(()=>{
       return isAuthenticated; 
    });



    return { logout, isAuthenticated, user, IsEmployeeLoggedIn }
})