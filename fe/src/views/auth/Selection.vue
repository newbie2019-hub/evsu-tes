<template>
<div class="bg-hero">
  <v-container class="vh-100">
   <v-row align="center" justify="center" class="h-device">
     <v-col class="pa-1" sm="9" md="7" lg="7">
       <v-layout align-center justify-center column>
         <img src="@/assets/images/logo.png" alt="" width="120" height="120">
         <h2 class="white--text text-center mt-4 mb-2">Are you a TES Grant?</h2>
         <p class="white--text mb-4">Please select an option to start</p>
         <v-row>
          <v-btn type="button" @click.prevent="$router.push('/login')" color="primary" dark :loading="isLoading" class="mt-3 mr-2">
              Yes
          </v-btn>
          <v-btn type="button" @click.prevent="$router.push('/application')" color="primary" class="mt-3">
            No
          </v-btn>
         </v-row>
       </v-layout>
     </v-col>
   </v-row>
  </v-container>
</div>
</template>
<script>
export default {
 mounted(){
  document.title = "Welcome, User!"
 },
 
}
</script>