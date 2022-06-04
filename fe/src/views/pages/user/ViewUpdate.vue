<template>
 <div>
   <v-container class="mt-4 mb-15">
      <v-btn text v-on:click.prevent="$router.back()">
        <v-icon>
         mdi-arrow-left
        </v-icon>
        Return
      </v-btn>
      <p class="headline pl-6 mt-5 font-weight-bold" v-html="data.title"></p>
      <small><p class="pl-6 text--secondary">{{data.created_at}}</p></small>
      <v-layout  class="mt-5 pa-2 ma-5">
       <p class="body-1 font-weight-normal text-justify" v-html="data.post_content"></p>
      </v-layout>
   </v-container>
 </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data(){
   return {
    data: {
     title: '',
     post_content: '',
     post_excerpt: '',
    }
   }
 },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('updates', ['view_update'])
  },
 async mounted(){
    await this.$store.dispatch('updates/incrementView', this.view_update.id)
    this.data = {
      id: this.view_update.id,
      title: this.view_update.title,
      created_at: this.view_update.created_at,
      post_content: this.view_update.post_content,
      post_excerpt: this.view_update.post_excerpt,
    }
 },
 methods: {
 },
}
</script>