<template>
 <div>
  <v-container class="pt-3 pl-8 pr-8 mb-16">
   <user-avatar />
   <v-row align="center" justify="center" class="mt-10">
    <v-col  cols="11" sm="10" lg="8">
     <h3>{{ msg }},</h3>
     <h1>{{ user.info.first_name }} {{ user.info.last_name }}</h1>
     <p class="grey--text lighten-1 caption mt-3">Welcome, Here are your updates.</p>
    </v-col>
   </v-row>
   <v-row class="mt-3" justify="center" align="center">
    <p v-if="updates.data.length == 0" class="grey--text mt-15 text-center pl-4">
     It appears that you don't have any updates yet.
    </p>
    <v-col sm="10" md="12" lg="8">
     <v-card elevation="1" class="mt-5" v-for="(update, i) in updates.data" :key="i" @click="setViewUpdate(update)">
      <v-row class="pr-3 pt-2" justify="end">
       <v-menu bottom transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
         <v-btn v-bind="attrs" v-on="on" text>
          <v-icon>mdi-dots-horizontal</v-icon>
         </v-btn>
        </template>
        <v-list>
         <v-list-item>
          <v-btn small depressed rounded text @click="setEditUpdate(update)">
           <v-icon small>mdi-pencil-outline</v-icon>
           Update
          </v-btn>
         </v-list-item>
         <v-divider></v-divider>
         <v-list-item>
          <v-dialog v-model="dialog" persistent max-width="290">
           <template v-slot:activator="{ on, attrs }">
            <v-btn
             small
             depressed
             rounded
             text
             v-on="on"
             v-bind="attrs"
             v-on:click.prevent="delete_data.id = update.id"
             class="red--text"
            >
             <v-icon small>mdi-delete</v-icon>
             Delete
            </v-btn>
           </template>
           <v-card>
            <v-card-title class="text-h5">
             Confirm Delete
            </v-card-title>
            <v-card-text>Are you sure you want to delete this post?</v-card-text>
            <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn color="gray" text @click="dialog = false">
              Cancel
             </v-btn>
             <v-btn color="red darken-3" text @click="deletePost">
              Yes
             </v-btn>
            </v-card-actions>
           </v-card>
          </v-dialog>
         </v-list-item>
        </v-list>
       </v-menu>
      </v-row>
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
  <v-btn
   fab
   color="red darken-2"
   dark
   bottom
   right
   fixed
   class="mb-15"
   v-on:click.prevent="$router.push('updates/create')"
  >
   <v-icon>mdi-plus</v-icon>
  </v-btn>
 </div>
</template>
<script>
 import UserAvatar from '../../components/UserAvatar.vue';

 import { mapState } from 'vuex';
 export default {
  data() {
   return {
    msg: 'Good Morning',
    delete_data: {
     id: '',
    },
   };
  },
  components: { UserAvatar },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('updates', ['updates']),
  },
  async mounted() {
   this.initialLoading = true;
   this.greetingMsg();
   this.$store.dispatch('updates/getUpdates', 1);
   this.initialLoading = false;
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
   setEditUpdate(data) {
    this.$store.commit('updates/SET_EDIT_UPDATE', { data: data });
    this.$router.push({ name: 'editupdate', params: { slug: data.id } });
   },
   setViewUpdate(data) {
    this.$store.commit('updates/SET_VIEW_UPDATE', { data: data });
    this.$router.push({ name: 'viewupdate', params: { slug: data.id } });
   },
   async deletePost() {
    const { status, data } = await this.$store.dispatch('updates/deleteUpdate', this.delete_data);
    this.checkStatus(data, status, '', 'updates/getUpdates');
    this.delete_data.id = '';
   },
  },
 };
</script>
<style scoped>
 .v-list {
  padding: 0 !important;
 }
</style>
