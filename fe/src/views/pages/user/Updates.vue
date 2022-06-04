<template>
 <div>
   <v-container class="mb-15">
    <v-row align="center" justify="center">
     <v-col md="7" lg="6" class="mr-6 ml-6">
       <v-layout class="pr-1 mt-5" column>
        <p class="subtitle-2">NOTE: In consonance with The Data Privacy Act of 2012 all information provided in this form will be treated with confidentiality.</p>
        <p class="subtitle-2 mt-2 red--text">You cannot edit your submitted application data</p>
       </v-layout>
       <p class="subtitle-2 mt-4">Application Status: 
        <v-chip class="white--text" :color="user.status.status == 0 ? 'red darken-2' : 'green darken-2'" x-small>{{user.status.status == 0 ? 'Not Qualified' : 'Qualified'}}</v-chip>
       </p>
       <p class="mt-6 text-uppercase primary--text">
         <v-icon color="primary">mdi-account-circle</v-icon>
         Personal Information
        </p>
       <v-divider class="mt-2"></v-divider>
       <v-form ref="form"  class="mt-5">
         <v-text-field type="text" :loading="initialLoading" readonly outlined v-model="data.email" label="Email Address" prepend-inner-icon="mdi-email" dense></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly outlined v-model="data.first_name" label="First Name" dense></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly outlined v-model="data.middle_name" label="Middle Name" dense></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly outlined v-model="data.last_name" label="Last Name" dense></v-text-field>
         <v-text-field type="text" :loading="initialLoading"  readonly outlined v-model="data.contact_number" label="Contact Number" dense></v-text-field>
         <v-select :items="gender" outlined v-model="data.gender" readonly label="Select gender" dense></v-select>
         <v-text-field v-model="data.birthday" label="Date of Birth" readonly outlined v-bind="attrs" v-on="on" dense></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="data.street" outlined dense label="Street"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="data.barangay" outlined dense label="Barangay"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="data.town" outlined dense label="Town"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="data.province" outlined dense label="Province"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="data.zipcode" outlined dense label="Zip Code"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="user.info.program" outlined dense label="Program"></v-text-field>
         <v-text-field type="text" :loading="initialLoading" readonly v-model="user.info.year_level" outlined dense label="Year Level"></v-text-field>
         <p class="mt-4 text-uppercase primary--text">
            <v-icon color="primary">mdi-account-key</v-icon>
            Family Info
            </p>
          <v-divider class="mt-2 mb-5"></v-divider>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.fathers_first_name" outlined dense label="Father's First Name"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.fathers_middle_name" outlined dense label="Father's Middle Name"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.fathers_last_name" outlined dense label="Father's Last Name"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.fathers_monthly_salary" outlined dense label="Father's Monthly Salary"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.mothers_first_name" outlined dense label="Mother's First Name"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.mothers_maiden_name" outlined dense label="Mother's Maiden Name"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.mothers_last_name" outlined dense label="Mother's Last Name"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.mothers_monthly_salary" outlined dense label="Mother's Monthly Salary"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.siblings_monthly_salary" outlined dense label="Siblings Monthly Salary"></v-text-field>
          <v-text-field type="number" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.house_member" outlined dense label="House Member"></v-text-field>
          <v-text-field type="text" class="mt-4" :loading="initialLoading" readonly hide-details="auto" v-model="user.familyinfo.dswd_household_number" outlined dense label="Household Number"></v-text-field>
          
       </v-form>
     </v-col>
    </v-row>
   </v-container>
 </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      dialogLogout: false,
      data: {
        first_name: '',
        middle_name: '',
        birthday: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        last_name: '',
        gender: '',
        contact_number: '',
        year_level: '',
        email: '',
        password: '',
        confirm_password: '',
        street: '',
        barangay: '',
        town: '',
        province: '',
        zipcode: '',
        hasDisability: false,
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        father_monthly_salary: '',
        mother_first_name: '',
        mother_maiden_name: '',
        mother_last_name: '',
        mother_monthly_salary: '',
        siblings_monthly_salary: '',
        house_member: '',
        household_number: '',
       },
      rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
      },
      changePassword: false,
      gender: [
        { value: "Male", text: "Male"},
        { value: "Female", text: "Female"},
      ]
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  async mounted(){
    this.initialLoading = true
    await this.$store.dispatch('auth/checkAuthUser')
    this.setDetails()
    this.initialLoading = false
  },
  methods: {
   ...mapActions('auth', ['logoutAuthUser']),
   async logout(){
     this.isLoading = true
     const res = await this.logoutAuthUser()
     if(res.status == 200){
       this.$router.push('/')
     }
     else if (res.status == 401){
       this.$store.commit('auth/UNSET_USER')
       this.$router.push('/')
     }
     this.isLoading = false
   },
   setDetails(){
     this.data.first_name = this.user.info.first_name
     this.data.middle_name = this.user.info.middle_name
     this.data.last_name = this.user.info.last_name
     this.data.gender = this.user.info.gender
     this.data.birthday = this.user.info.birthday
     this.data.contact_number = this.user.info.contact_number
     this.data.email = this.user.email
     this.data.street = this.user.info.street
     this.data.barangay = this.user.info.barangay
     this.data.town = this.user.info.town
     this.data.province = this.user.info.province
     this.data.zipcode = this.user.info.zipcode
   },
   async save(){
     this.$refs.form.validate()
     const {status, data} = await this.$store.dispatch('auth/updateAccount', this.data)
     this.checkStatus(data, status, '', 'auth/checkAuthUser')
     this.data.password = ''
   }
  }
}
</script>