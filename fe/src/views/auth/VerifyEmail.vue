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
  await this.checkPasswordResetToken()
  this.isLoading = false
 },
 methods: {
  async checkPasswordResetToken(){
   let data = {
    token: this.$route.query.token,
    id: this.$route.query.id
   }
   const res = await this.$store.dispatch('auth/verifyEmail', data)
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