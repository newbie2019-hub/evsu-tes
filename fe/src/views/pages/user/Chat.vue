<template>
 <v-container class="">
  <v-row align="center" justify="center">
   <v-col cols="12" sm="10" md="10" lg="10" class="mr-6 ml-6">
    <v-app-bar-nav-icon class="mt-6" @click.stop="setDrawerState"></v-app-bar-nav-icon>
    <section>
     <main>
      <div
       v-for="(msg, index) in messages"
       v-bind:key="'index-' + index"
       :class="['message', sentOrReceived(msg.userUID)]"
      >
       <p>{{ msg.text }}</p>
      </div>
      <div ref="scrollable"></div>
     </main>

     <form v-on:submit.prevent="sendMessage">
      <input v-model="message" type="text" placeholder="Enter your message!" />
      <button class="btn-send" :disabled="!message" type="submit">📩</button>
     </form>
    </section>
   </v-col>
  </v-row>
 </v-container>
</template>
<script>
 import { mapState } from 'vuex';
 import firebase from 'firebase';
 export default {
  async mounted() {
   document.title = 'Chat Application - Evsu-TES';
   await this.$store.dispatch('auth/checkAuthUser');

   let query = firebase.firestore().collection('messages');
   query = query.where('chatID', '==', this.user.student_number);
   query = query.orderBy('createdAt');
   query.onSnapshot((querySnap) => {
    this.messages = querySnap.docs.map((doc) => doc.data());
   });

   await this.updateUnread();
  },
  data() {
   return {
    db: firebase.firestore(),
    message: '',
    messages: [],
    chatID: '',
   };
  },
  computed: {
   ...mapState('auth', ['user']),
  },
  methods: {
   setDrawerState() {
    this.$store.commit('updates/SET_DRAWER_STATE');
   },
   sentOrReceived(userUID) {
    return userUID === this.user.student_number ? 'sent' : 'received';
   },
   async updateUnread() {
    let updateUnseen = firebase.firestore().collection('messages');
    updateUnseen = updateUnseen.where('chatID', '==', this.user.student_number);
    updateUnseen = updateUnseen.orderBy('createdAt');
    updateUnseen.get().then((query) => {
     query.forEach((doc) => {
      if (doc.data().userUID != this.user.student_number) {
       doc.ref.update({ seen: true });
      }
     });
    });
   },
   async sendMessage() {
    const messageInfo = {
     userUID: this.user.student_number,
     displayName: this.user.info.first_name + ' ' + this.user.info.last_name,
     text: this.message,
     createdAt: Date.now(),
     chatID: this.user.student_number,
     seen: false,
    };
    await this.db.collection('messages').add(messageInfo);
    await this.updateUnread()
    this.message = '';
    this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' });
   },
  },
 };
</script>

<style scoped>
 section {
  display: flex;
  flex-direction: column;
  justify-content: center;
 }

 section main {
  padding: 10px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  max-height: 78vh;
  min-height: 78vh;
 }

 form {
  height: 6vh;
  bottom: 0;
  width: 100%;
  display: flex;
  margin-top: 5px;
  font-size: 1rem;
 }

 input {
  line-height: 1.3;
  width: 100%;
  font-size: 1rem;
  outline: none;
  border: none;
  padding: 0 15px;
 }

 input {
  color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid grey;
 }

 p {
  max-width: 500px;
  margin-bottom: 12px;
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  color: white;
  text-align: center;
 }

 .message {
  display: flex;
  align-items: center;
 }
 .message.received p {
  background: #e5e5ea;
  margin-top: 3px;
  color: #000;
 }
 .message.sent {
  flex-direction: row-reverse;
  align-self: flex-end;
 }

 .message.sent p {
  color: #fff;
  background: #0b93f6;
  margin-top: 3px;
 }

 .btn-send {
  background: #0b93f6;
  padding: 0rem 1rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
 }
</style>
