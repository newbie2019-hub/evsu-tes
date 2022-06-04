<template>
  <div class="home">
    <side-nav />
    <router-view name="userdashboard"/>
    <router-view name="userstatus"/>
    <router-view name="userchat"/>
    <router-view name="UserLogs"/>
    <router-view name="userviewupdate"/>
    <router-view name="usersettings"/>
  </div>
</template>
<script>
import SideNav from './components/SideNav.vue'
export default {
  name: 'Index',
  async mounted(){
    await this.$store.dispatch('auth/checkAuthUser')
  },
  components: {
    SideNav
  }
}
</script>
