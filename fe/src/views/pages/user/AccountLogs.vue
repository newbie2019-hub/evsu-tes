<template>
 <div>
  <user-avatar />
  <v-container class="pt-3 pl-8 pr-8 mb-16">
   <v-row align="center" justify="center">
     <v-col sm="10" md="10" lg="8">
     <h4>{{ msg }},</h4>
     <h1>{{ user.info.first_name }} {{ user.info.last_name }}</h1>
     <h4 class="grey--text lighten-1 mt-3">Welcome, Here are your activity logs.</h4>
     <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="userlogs"
        :search="search"
      >
      </v-data-table>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import UserAvatar from '../../components/UserAvatar.vue';
import { mapState } from 'vuex';

export default {
  components: { UserAvatar },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('auth', ['userlogs'])
  },
  data(){
   return {
    search: '',
    msg: 'Good Day',
    headers: [
       {
         text: 'Log Name',
         align: 'start',
         filterable: true,
         value: 'log_name',
       },
       { text: 'Event', value: 'event' },
       { text: 'Description', value: 'description' },
       { text: 'Created At', value: 'created_at' },
     ],
   }
  },
  methods: {
    greetingMsg() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
     this.msg = 'Good Morning';
    } else if (curHr < 18) {
     this.msg = 'Good Afternoon';
    } else {
     this.msg = 'Good Evening';
    }
   },
  },
  async mounted() {
   this.initialLoading = true;
   await this.$store.dispatch('auth/checkAuthUser')
   await this.$store.dispatch('auth/getUserLogs');
   this.greetingMsg();
   this.initialLoading = false;
  },
}
</script>