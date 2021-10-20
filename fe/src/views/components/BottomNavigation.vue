<template>
  <v-bottom-navigation color="red darken-2" v-model="value" absolute class="position-fixed">

    <v-btn value="dashboard" v-on:click="$router.push('/home/dashboard')">
      <span>Home</span>
      <v-icon small>mdi-home</v-icon>
    </v-btn>

    <v-btn value="updates" v-on:click="$router.push('/home/updates')">
      <span>Updates</span>
      <v-icon small>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby" v-on:click="$router.push('/home/records')">
      <span>Records</span>
      <v-icon small>mdi-file-multiple</v-icon>
    </v-btn>

    <v-btn value="settings" v-on:click="$router.push('/home/settings')">
      <span>Settings</span>
      <v-icon small>mdi-account-cog</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 'dashboard' }),
  }
</script>