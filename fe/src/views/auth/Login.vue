<template>
 <div class="bg-hero">
   <v-container>
     <v-row align="center" justify="center" class="h-device">
       <v-col lg="6" md="8">
        <v-layout align-center justify-center column>
         <img src="@/assets/images/logo.png" alt="" width="110" height="110">
         <v-form ref="form" @submit.prevent="login" class="pl-10 pr-10">
           <p class="white--text text-center mt-4">Welcome, Please enter your credentials to proceed</p>
           <v-text-field
              label="Email"
              v-model="data.email"
              :rules="emailRules"
              hide-details="auto"
              required
              color="white"
              clearable
              dark
            ></v-text-field>
            <v-text-field type="password" v-model="data.password" dark label="Password"></v-text-field>
            <v-switch
                v-model="adminlogin"
                label="Admin login"
                dark
                class="mt-0"
              ></v-switch>
            <v-btn type="submit" depressed color="primary" block :disabled="isLoading">
             Login
             <v-icon right>
               mdi-arrow-right-thin-circle-outline
             </v-icon>
            </v-btn>
         </v-form>
        </v-layout>
       </v-col>
     </v-row>
   </v-container>
 </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data: () => ({
    data: {
     email: '',
     password: '',
    },
    adminlogin: false,
    rules: [
      val => !!val || 'Required.',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  mounted() {
   document.title = "Welcome, Please login to proceed"
   this.$toast.success("Welcome, Please log-in to proceed");
  },
  methods: {
    ...mapActions("auth", ["loginAccount", "loginUserAccount"]),
   async login() {
      this.isLoading = true;
      if (this.adminlogin) {
        await this.loginAccount(this.data).then((res) => {
          if (res.status == 200) {
            this.$toast.success(`Welcome, ${res.data.user_info.first_name} ${res.data.user_info.last_name}!`);
            this.$router.push("/home/dashboard");
          } else {
            this.$toast.error("Invalid Credentials");
          }
        });
      } else {
        await this.loginUserAccount(this.data).then((res) => {
          if (res.status == 200) {
            this.$router.push("/user/dashboard");
          } else {
            this.$toast.error("Invalid Credentials");
          }
        });
      }
      this.isLoading = false;
    },
  }
}
</script>