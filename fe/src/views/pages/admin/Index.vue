<template>
  <div class="home">
    <bottom-nav />
    <router-view name="dashboard"/>
    <router-view name="records"/>
    <router-view name="scholar"/>
    <router-view name="settings"/>
    <router-view name="updates"/>
    <router-view name="adminchat"/>
    <router-view name="editupdate"/>
    <router-view name="AdminLogs"/>
    <router-view name="viewupdate"/>
    <router-view name="createupdate"/>
    <router-view name="accounts"/>
    <router-view name="viewapplicant"/>
    <router-view name="viewaccount"/>
  </div>
</template>
<script>
import BottomNav from '../../components/BottomNavigation.vue'
export default {
  name: 'Index',
  async mounted(){
    await this.$store.dispatch('auth/checkUser')
  },
  components: {
    BottomNav
  },
  computed: {
     
  }
}
</script>
