<template>
 <div>
   <user-avatar/>
   <v-container class="pt-3 pl-8 pr-8 mb-16">
    <h5>{{msg}},</h5>
    <h2>{{user.info.first_name}} {{user.info.last_name}}</h2>
    <p class="grey--text lighten-1 caption mt-3">Welcome, Here are your updates.</p>
    <v-row class="mt-4">
      <v-card elevation="1" class="mt-3">
        <v-row class="pr-3 pt-2" justify="end">
         <v-menu bottom  transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small v-bind="attrs" v-on="on" text>
             <v-icon>mdi-dots-horizontal</v-icon>
           </v-btn>
          </template>
          <v-list>
           <v-list-item>
            <v-btn small depressed rounded text>
              <v-icon small>mdi-pencil-outline</v-icon>
             Update
            </v-btn>
           </v-list-item>
           <v-divider></v-divider>
           <v-list-item>
            <v-btn small depressed rounded text class="red--text">
              <v-icon small>mdi-delete</v-icon>
             Delete
            </v-btn>
           </v-list-item>
          </v-list>
         </v-menu>
        </v-row>
        <v-card-text class="mt-n8">
         <p class="text-h5 text--primary">Update Title</p>
         <p class=""><small>09-23-2021</small></p>
         <div class="text--primary mt-3">
           <p class="w-100">
            Ollum reprehenderit sed aliquid beatae! Quis, qui! Est repellat perferendis facere, tenetur earum quam consequuntur autem fugit. Quod, accusantium et.
           </p>
         </div>
         <div class="text--primary mt-3">
           <p class="w-100">
             Views: 100
           </p>
         </div>
       </v-card-text>
      </v-card>
      <v-card elevation="1" class="mt-3">
        <v-row class="pr-3 pt-2" justify="end">
         <v-menu bottom transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small v-bind="attrs" v-on="on" text>
             <v-icon>mdi-dots-horizontal</v-icon>
           </v-btn>
          </template>
          <v-list>
           <v-list-item>
            <v-btn small depressed rounded text >
               <v-icon small>mdi-pencil-outline</v-icon>
             Update
            </v-btn>
           </v-list-item>
           <v-divider></v-divider>
           <v-list-item>
            <v-btn small depressed rounded text class="red--text">
              <v-icon small>mdi-delete</v-icon>
             Delete
            </v-btn>
           </v-list-item>
          </v-list>
         </v-menu>
        </v-row>
        <v-card-text class="mt-n8">
         <p class="text-h5 text--primary">Update Title</p>
         <p class=""><small>09-23-2021</small></p>
         <div class="text--primary mt-3">
           <p class="w-100">
            Ollum reprehenderit sed aliquid beatae! Quis, qui! Est repellat perferendis facere, tenetur earum quam consequuntur autem fugit. Quod, accusantium et.
           </p>
         </div>
         <div class="text--primary mt-3">
           <p class="w-100">
             Views: 100
           </p>
         </div>
       </v-card-text>
      </v-card>
      <v-card elevation="1" class="mt-3">
        <v-row class="pr-3 pt-2" justify="end">
         <v-menu bottom  transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small v-bind="attrs" v-on="on" text>
             <v-icon>mdi-dots-horizontal</v-icon>
           </v-btn>
          </template>
          <v-list>
           <v-list-item>
            <v-btn small depressed rounded text>
              <v-icon small>mdi-pencil-outline</v-icon>
             Update
            </v-btn>
           </v-list-item>
           <v-divider></v-divider>
           <v-list-item>
            <v-btn small depressed rounded text class="red--text">
              <v-icon small>mdi-delete</v-icon>
             Delete
            </v-btn>
           </v-list-item>
          </v-list>
         </v-menu>
        </v-row>
        <v-card-text class="mt-n8">
         <p class="text-h5 text--primary">Update Title</p>
         <p class=""><small>09-23-2021</small></p>
         <div class="text--primary mt-3">
           <p class="w-100">
            Ollum reprehenderit sed aliquid beatae! Quis, qui! Est repellat perferendis facere, tenetur earum quam consequuntur autem fugit. Quod, accusantium et.
           </p>
         </div>
         <div class="text--primary mt-3">
           <p class="w-100">
             Views: 100
           </p>
         </div>
       </v-card-text>
      </v-card>
    </v-row>
   </v-container>
    <v-btn fab dark bottom right fixed small class="mb-15">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
 </div>
</template>
<script>
import UserAvatar from '../../components/UserAvatar.vue'
import {mapState} from 'vuex'
export default {
  data() {
   return {
    msg: 'Good Morning',
   }
  },
  components: {UserAvatar},
  computed: {
   ...mapState('auth', ['user'])
  },
  mounted(){
   this.greetingMsg()
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
<style scoped>
.v-list {
 padding: 0 !important;
}
</style>