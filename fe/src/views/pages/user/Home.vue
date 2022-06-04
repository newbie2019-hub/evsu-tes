<template>
 <div>
  <v-container class="pt-3 pl-8 pr-8 mb-5">
   <user-avatar />
   <v-row align="center" justify="center">
    <v-col sm="10" md="8" lg="8">
     <h4>{{ msg }},</h4>
     <h1>{{ user.info.first_name }} {{ user.info.last_name }}</h1>
     <h3 class="grey--text lighten-1 caption mt-3">Welcome, Here are the updates</h3>
    </v-col>
   </v-row>
   <v-row class="mt-3" justify="center" align="center">
    <v-col sm="10" md="8" lg="8">
    <p v-if="updates.data.length == 0" class="grey--text mt-15 text-center pl-4">
     It appears they don't have any updates yet.
    </p>
     <v-card elevation="1" class="mt-10" v-for="(update, i) in updates.data" :key="i" @click="setViewUpdate(update)">
      <v-card-text class="mt-n8">
       <p class="text-h5 text--primary">{{ update.title }}</p>
       <p class="">
        <small>{{ update.created_at }}</small>
       </p>
       <div class="text--primary mt-3">
        <p class="w-100">
         {{ update.post_excerpt }}
        </p>
       </div>
       <div class="text--primary mt-3">
        <p class="w-100">Views: {{ update.views }}</p>
       </div>
      </v-card-text>
     </v-card>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
 import UserAvatar from './components/UserAvatar.vue';
 import { mapState } from 'vuex';
 export default {
  data() {
   return {
    msg: '',
   };
  },
  components: { UserAvatar },
  mounted() {
   this.greetingMsg();
   this.$store.dispatch('updates/getUserUpdates', 1);
  },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('updates', ['updates']),
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
   setViewUpdate(data) {
    this.$store.commit('updates/SET_VIEW_UPDATE', { data: data });
    this.$router.push({ name: 'userviewupdate', params: { slug: data.id } });
   },
  },
 };
</script>
