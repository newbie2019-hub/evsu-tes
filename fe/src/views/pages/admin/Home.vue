<template>
 <div>
  <user-avatar/>
  <v-container class="pt-3 pl-8 pr-8">
   <h5>{{msg}},</h5>
   <h2>{{user.info.first_name}} {{user.info.last_name}}</h2>
   <p class="grey--text lighten-1 caption mt-3">Welcome, Here is your summary</p>
   <v-row class="mt-4">
    <v-col md="">
     <v-card elevation="1" class="pa-3">
       <v-list-item three-line>
        <v-list-item-content >
          <v-list-item-title class="text-h5 mb-1  text-center">
            <span class="text-h3">15</span>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Applicants
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     </v-card>
    </v-col>
    <v-col md="">
     <v-card elevation="1" class="pa-3">
       <v-list-item three-line>
        <v-list-item-content >
          <v-list-item-title class="text-h5 mb-1  text-center">
            <span class="text-h3">25</span>
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Updates
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
     </v-card>
    </v-col>
   </v-row>
  </v-container>
  <div style="height: 800px"></div>
 </div>
</template>
<script>
import UserAvatar from '../../components/UserAvatar.vue'
import {mapState} from 'vuex'
export default {
  data(){
    return {
     msg: '',
    }
  },
  components: {UserAvatar},
  mounted(){
   this.greetingMsg()
  },
  computed: {
   ...mapState('auth', ['user'])
  },
  methods: {
   greetingMsg(){
      var today = new Date()
      var curHr = today.getHours()
      if (curHr < 12) {
        this.msg = 'Good Morning'
      } else if (curHr < 18) {
        this.msg = 'Good Afternoon'
      } else {
        this.msg = 'Good Evening'
      }
    }
  }
}
</script>