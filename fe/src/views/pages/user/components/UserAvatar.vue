<template>
 <v-container class="h-100">
   <v-layout class="pl-10">
    <v-app-bar-nav-icon class="pt-6" @click.stop="setDrawerState"></v-app-bar-nav-icon>
   </v-layout>
  <v-row justify="end" class="pr-7 pt-5">
   <v-menu bottom min-width="150px" rounded offset-y >
    <template v-slot:activator="{ on }">
     <v-btn icon v-on="on">
      <v-avatar color="brown" size="52" right class="">
       <img v-if="user.info.image" :src="`https://be.tesgrant.info/images/${user.info.image}`" height="52" width="52" alt="Profile Image">
       <span v-else class="white--text text-h5">{{ user.info.first_name[0] }}{{user.info.last_name[0]}}</span>
      </v-avatar>
     </v-btn>
    </template>
    <v-card>
     <v-list-item-content class="justify-center">
      <div class="mx-auto text-center">
       <v-avatar color="brown" size="30">
        <span class="white--text">{{ user.info.first_name[0] }}{{user.info.last_name[0]}}</span>
       </v-avatar>
       <h4 class=" mt-2">{{ user.info.first_name }} {{user.info.last_name}}</h4>
       <v-divider class="my-3"></v-divider>
       <v-btn small depressed rounded text class="blue--text" v-on:click.prevent="$router.push('/user/settings')">
        <v-icon>mdi-cog</v-icon>
        Settings
       </v-btn>
       <v-divider class="my-3"></v-divider>
       <v-dialog
          v-model="dialog"
          persistent
          max-width="290">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small  depressed rounded text v-bind="attrs"
              v-on="on" class="red--text">
            <v-icon color="red accent-3">mdi-exit-to-app</v-icon>
            Log-out
           </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Confirm Log-out
            </v-card-title>
            <v-card-text>Are you sure you want to log-out?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray"
                text
                @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn
                color="green darken-3"
                text
                @click="logout">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       
      </div>
     </v-list-item-content>
    </v-card>
   </v-menu>
  </v-row>
 </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex';
 export default {
  data: () => ({
   dialog: false,
  }),
  computed: {
   ...mapState('auth', ['user'])
  },
  methods: {
   ...mapActions('auth', ['logoutUser']),
    setDrawerState(){
     this.$store.commit('updates/SET_DRAWER_STATE')
   },
   async logout(){
     this.isLoading = true
     const res = await this.logoutUser()
     if(res.status == 200){
       this.$router.push('/')
     }
     else if (res.status == 401){
       this.$store.commit('auth/UNSET_USER')
       this.$router.push('/')
     }
     this.isLoading = false
   },
  }
 };
</script>
<style >
.v-menu__content {
 margin-top: 15px;
}
</style>
