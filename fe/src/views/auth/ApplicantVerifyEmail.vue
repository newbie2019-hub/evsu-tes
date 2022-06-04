<template>
 <div>
   <v-overlay :value="isLoading">
     <v-progress-circular
       indeterminate
       size="64"
     ></v-progress-circular>
   </v-overlay>
 </div>
</template>
<script>
export default {
 data(){
  return {
   isLoading: true
  }
 },
 async mounted(){
  document.title = "Email Verification"
  await this.applicantEmailVerification()
  this.isLoading = false
 },
 methods: {
  async applicantEmailVerification(){
   let data = {
    token: this.$route.query.token,
    id: this.$route.query.id,
    type: this.$route.query.type
   }
   const res = await this.$store.dispatch('applicant/verifyEmail', data)
   console.log(res)
   if(res.status == 200){
    this.$toast.success('Email verification successful');
    this.isLoading = false
    this.$router.push('/')
   }
   else {
    this.$toast.error('Verification request is invalid');
    this.$router.push('/')
   }
  },
 }
}
</script>