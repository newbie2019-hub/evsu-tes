<template>
 <div>
  <v-container class="mb-14 p-4 pl-6 pr-6">
   <user-avatar />
   <v-row align="center" justify="center">
    <v-col cols="11" sm="10" lg="8">
     <h1 class="primary--text">Applicant Records</h1>
     <p class="grey--text lighten-1">Welcome, Here are the applicants</p>
    </v-col>
   </v-row>
   <v-row align="center" justify="center">
    <v-col sm="10" md="10" lg="8">
     <v-card-title>
      <v-text-field outlined v-model="search" append-icon="mdi-magnify" label="Search" hide-details class="pt-0"></v-text-field>
     </v-card-title>
     <v-card-title>
      <v-select outlined v-model="selectedStatus" @change="getApplicants" :items="filterStatus" label="Status" ></v-select>
     </v-card-title>
     <v-data-iterator :items="applicants" :loading="initialLoading">
      <template v-slot:default="{ items }">
       <v-card flat v-for="item in items" :key="item.id" class="mt-4" @click="setViewRecord(item)">
        <v-list-item class="grow">
         <v-list-item-avatar color="grey darken-3">
          <img
           v-if="item.info.image"
           :src="`https://be.tesgrant.info/images/${item.info.image}`"
           height="90"
           width="90"
           alt="Profile Image"
          />
          <span v-else class="white--text text-h6">{{ item.info.first_name[0] }}{{ item.info.last_name[0] }}</span>
         </v-list-item-avatar>
         <v-list-item-content>
          <v-list-item-title>{{ item.info.first_name }} {{ item.info.last_name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
          <v-layout class="mt-2">
           <small>Enrollment Status: &nbsp;</small>
           <v-chip
            class="white--text"
            :color="item.status == 'Unofficial' ? 'red darken-2' : 'green darken-2'"
            x-small
            >{{ item.status == 'Official' ? 'Officially Enrolled' : 'Unofficial' }}</v-chip
           >
          </v-layout>
         </v-list-item-content>
        </v-list-item>
       </v-card>
      </template>
     </v-data-iterator>
     <v-card-title>
      <v-btn @click="exportData" ref="download" :loading="isLoading" color="secondary" elevation="2">Export Data</v-btn>
     </v-card-title>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
 import UserAvatar from '../../components/UserAvatar.vue';
 import { mapState } from 'vuex';
 import { Browser } from '@capacitor/browser';
 export default {
  data() {
   return {
    search: '',
    data: [],
    keys: ['Status'],
    sortBy: 'status',
    filterStatus: ['Officially Enrolled', 'Unofficial', 'All Records'],
    selectedStatus: 'All Records',
    isLoading: false,
   };
  },
  computed: {
   ...mapState('applicant', ['applicants']),
  },
  async mounted() {
   this.initialLoading = true;
   document.title = 'Applicant Records';
   await this.$store.dispatch('applicant/getApplicants', { status: this.selectedStatus, search: this.search });
   this.initialLoading = false;
  },
  components: { UserAvatar },
  methods: {
   setViewRecord(data) {
    this.$store.commit('applicant/SET_VIEW_APPLICANT', { data: data });
    this.$router.push({ name: 'viewapplicant', params: { slug: data.id } });
   },
   async getApplicants() {
    await this.$store.dispatch('applicant/getApplicants', { status: this.selectedStatus, search: this.search });
   },
   async exportData() {
    if (this.applicants.length == 0) return this.$toast.error('No data has been found for export');

    this.isLoading = true;
    const res = await this.$store.dispatch('applicant/exportData', this.selectedStatus);
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.target = '_';
    link.setAttribute('download', 'template.xlsx');
    document.body.appendChild(link);
    link.click();

    //Enable for mobile application
    await Browser.open({ url: `https://be.tesgrant.info/api/admin/records/export?status=${this.selectedStatus}` });

    this.isLoading = false;
   },
  },
  watch: {
   search() {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
     this.getApplicants();
    }, 900);
   },
  },
 };
</script>
<style scoped>
 .v-list-item__avatar {
  justify-content: center !important;
 }
</style>
