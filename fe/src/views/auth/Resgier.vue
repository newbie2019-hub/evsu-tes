<template>
<div class="bg-hero">
  <v-container class="h-100 pa-6">
   <v-row align="center" justify="center" class="h-device mb-8">
     <v-col class="pa-1" sm="9" md="7" lg="7">
      <v-layout class="pl-6 mt-5  white--text">
       <p class="headline">Register</p>
      </v-layout>
      <v-layout class="pl-6 pr-5  white--text">
       <p class="subtitle-2">Please ensure that all the details are correct as this will be reviewed by the adminstrator.</p>
      </v-layout>
      <v-layout class="pl-6 pr-5  white--text">
       <p class="subtitle-2 mb-5 red--text" v-if="!isValid">All fields are required!</p>
      </v-layout>
       <v-form ref="form" class="pl-6 pr-5" @submit.prevent="registerAccount">
        <v-row align="center" justify="center" class="white--text ">
         <v-col class="pa-1 white--text" cols="12" sm="6" md="6" lg="6" >
          <v-text-field type="text" class="pt-2" hide-details="auto" dark :rules="[rules.required]" v-model="data.student_id" outlined dense label="Student ID"></v-text-field>
         </v-col>
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6">
          <v-text-field type="text" class="pt-2" hide-details="auto" dark :rules="[rules.required]" v-model="data.tes_award" outlined dense label="TES Award Number"></v-text-field>
         </v-col> 
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6">
          <v-text-field type="text" class="pt-2" hide-details="auto" dark :rules="[rules.required]" v-model="data.first_name" outlined dense label="First Name"></v-text-field>
         </v-col> 
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6">
          <v-text-field type="text" class="pt-2" hide-details="auto" dark :rules="[rules.required]" v-model="data.middle_name" outlined dense label="Middle Name"></v-text-field>
         </v-col>  
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6">
          <v-text-field type="text" class="pt-2" hide-details="auto" dark :rules="[rules.required]" v-model="data.last_name" outlined dense label="Last Name"></v-text-field>
         </v-col> 
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6"> 
          <v-text-field type="email" class="pt-2" dark :rules="[rules.required, rules.email]" hide-details="auto" v-model="data.email" outlined dense label="Email Address"></v-text-field>
         </v-col>   
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6"> 
          <v-text-field type="password" class="pt-2" dark :rules="[rules.required]" hide-details="auto" v-model="data.password" outlined dense label="Password"></v-text-field>
         </v-col>   
         <v-col class="pa-1" sm="6" cols="12" md="6" lg="6"> 
          <v-text-field type="password" class="pt-2" dark :rules="[rules.required]" hide-details="auto" v-model="data.confirm_password" outlined dense label="Confirm Password"></v-text-field>
         </v-col>   
          <v-btn type="submit" color="primary" dark :loading="isLoading" class="mt-3 mr-2">
             Submit
          </v-btn>
          <v-btn type="button" @click.prevent="$router.back()" color="grey" class="mt-3">
            Cancel
          </v-btn>
        </v-row>
       </v-form>
     </v-col>
   </v-row>
  </v-container>
</div>
</template>
<script>
export default {
 mounted(){
  document.title = "Register Account"
 },
 data(){
  return {
    rules: {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
    isValid: false,
    isLoading: false,
    data: {
     student_id: '',
     first_name: '',
     middle_name: '',
     last_name: '',
     contact_number: '',
     email: '',
     password: '',
     confirm_password: '',
    }
  }
 },
 methods: {
  async registerAccount(){
    this.isValid = this.$refs.form.validate()
    if(this.isValid){
     const {status, data} = await this.$store.dispatch('auth/registerAccount', this.data)
      if (status == 422) {
          this.UnprocEntity(data)
      } else if (status == 200) {
         this.successResponse(data)
         this.$router.back()
      } else {
          this.errResponse(data)
      }
    }
  }
 }
}
</script>