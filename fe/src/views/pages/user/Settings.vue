<template>
 <div>
   <v-container class="mb-15">
    <v-row align="center" justify="center">
     <v-col cols="11" md="10" lg="10" class="mr-6 ml-6">
       <v-app-bar-nav-icon class="mt-6" @click.stop="setDrawerState"></v-app-bar-nav-icon>
       <v-layout align-center justify-center class="mt-8">
        <v-avatar color="primary" size="90">
          <img v-if="user.info.image" :src="`https://be.tesgrant.info/images/${user.info.image}`" height="90" width="90" alt="Profile Image">
          <span v-else class="white--text text-h5">{{ user.info.first_name[0] }}{{user.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-2">
         <v-col class="text-center">
          <p class="text-h5">{{ user.info.first_name }} {{user.info.last_name}}</p>
          <p class="caption">{{ user.email}}</p>
         </v-col>
       </v-layout>
        <p class="mt-6 text-uppercase primary--text">
          <v-icon color="primary">mdi-account-circle</v-icon>
          Profile Image
        </p>
        <v-divider class="mt-2"></v-divider>
        <v-form ref="imageupload" @submit.prevent="uploadProfileImage">
          <v-file-input type="file" v-model="data.profileimg" show-size accept=".png,.jpg,.jpeg.,.webp,.svg " label="Upload Image" truncate-length="25"></v-file-input>
          <p class="grey--text text-caption">Note: This will replace your current image if you have.</p>
          <v-btn type="submit" color="success darken-1 mt-3" dark>Upload</v-btn>
        </v-form>
        <p class="mt-6 text-uppercase primary--text">
          <v-icon color="primary">mdi-account-circle</v-icon>
          Personal Information
        </p>
        <v-divider class="mt-2"></v-divider>
       <v-form ref="form"  class="mt-5">
        <v-text-field type="text" class="mt-5" hide-details="auto" v-model="data.student_number" outlined dense label="Student Number"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" :rules="[rules.required]" v-model="data.first_name" outlined dense label="First Name"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.middle_name" outlined dense label="Middle Name"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" :rules="[rules.required]" v-model="data.last_name" outlined dense label="Last Name"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.ext_name" outlined dense label="Last Name"></v-text-field>
        <v-select :items="gender" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.gender" label="Gender" dense></v-select>
        <v-dialog
            ref="dialog"
            v-model="birthdayModal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                class="pt-2"
                v-model="data.birthday"
                label="Date of Birth"
                readonly
                outlined
                dense
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="data.birthday" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="birthdayModal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <v-select :items="programs" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.program" label="Program Name" dense></v-select>
          <v-select :items="yearlevel" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.year_level" label="Year Level" dense></v-select>
          
        <!-- <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.marital_status" outlined dense label="Marital Status"></v-text-field> -->
        <v-text-field type="text" class="mt-4" hide-details="auto" :rules="[rules.required, rules.mobile]" v-model="data.contact_number1" outlined dense label="Primary Contact Number"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" :rules="[rules.required, rules.mobile]" v-model="data.contact_number2" outlined dense label="Secondary Contact Number"></v-text-field>
        <v-textarea type="text" class="mt-4" hide-details="auto" v-model="data.street" rows="2" outlined dense label="Street"></v-textarea>
        <v-textarea type="text" class="mt-4" hide-details="auto" v-model="data.barangay" rows="2" outlined dense label="Barangay"></v-textarea>
        <v-textarea type="text" class="mt-4" hide-details="auto" v-model="data.town" rows="2" outlined dense label="Town"></v-textarea>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.province" outlined dense label="Province"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.zipcode" outlined dense label="Zip Code"></v-text-field>
        <p class="mt-6 text-uppercase primary--text">
          <v-icon color="primary">mdi-account-circle</v-icon>
          Grant Type
        </p>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.tes_award" outlined dense label="TES Award Number"></v-text-field>
        <v-text-field type="text" class="mt-4" hide-details="auto" v-model="data.tes_application_number" outlined dense label="Application Number"></v-text-field>
        <v-select :items="testype" class="mt-4" hide-details="auto" outlined v-model="data.tes_grant_type" label="Type of TES Grant" dense></v-select>
        
        <p class="mt-6 text-uppercase primary--text">
          <v-icon color="primary">mdi-note-multiple</v-icon>
          School Info <small class="secondary--text">- Reload to ignore changes</small>
        </p> 
        <v-divider class="mt-2"></v-divider>
        <div v-for="(data, i) in data.schoolyearinfo" :key="i">
           <p class="mt-2">Please fill-in this data accurately</p>
           <v-divider class="mt-2 mb-1"></v-divider>
           <v-select :items="schoolyear" class="pt-2" hide-details="auto" outlined v-model="data.school_year" label="School Year" dense></v-select>
           <v-select :items="semester" class="pt-2" hide-details="auto" outlined v-model="data.semester" label="Semester" dense></v-select>
           <v-text-field type="text" class="pt-2" hide-details="auto" v-model="data.gwa" outlined dense label="GWA"></v-text-field>
           <v-text-field type="number" class="pt-2" hide-details="auto" v-model="data.units" outlined dense label="Units Enrolled"></v-text-field>
          <v-btn
            color="error" class="mt-3 mr-2"
            v-if="i > 0"
            @click="removeFields(i)">
            Remove Fields
          </v-btn>
        </div>
          <v-btn
            color="primary" class="mt-3 mr-2"
            @click="addFields">
            Add Fields
          </v-btn>

        <p class="mt-4 text-uppercase primary--text">
          <v-icon color="primary">mdi-account-key</v-icon>
          Login Credentials
          </p>
        <v-divider class="mt-2 mb-5"></v-divider>
        <v-text-field type="email" class="mt-4 mb-4" hide-details="auto" v-model="data.email" outlined dense label="Primary Email Address">
          <v-icon v-if="data.email_verified_at" slot="append" color="green">mdi-check</v-icon>
          <v-icon v-else slot="append" color="red">mdi-window-close</v-icon>
        </v-text-field>
        <v-text-field type="password" 
          clearable 
          outlined 
          v-model="data.password" 
          label="Password"  
          prepend-inner-icon="mdi-lock" 
          hint="If empty, password wont be changed"
          persistent-hint
          dense>
        </v-text-field>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success darken-1 mt-3"
              dark
              v-bind="attrs"
              v-on="on">
              Save Changes
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Update Account
            </v-card-title>
            <v-card-text>Enter your current password to save your changes</v-card-text>
            <v-text-field type="password" hint="Current Password" class="pl-5 pr-5" :rules="[rules.required]" required counter clearable outlined v-model="data.confirm_password" label="Current password" dense></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey darken-1" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn  v-on:click.prevent="save" color="green darken-1" text>
                Proceed
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       </v-form>
       <v-layout class="mt-5">
         <v-dialog
            v-model="dialogLogout"
            persistent
            max-width="290">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="red--text">
            Log-out Account
            <v-icon color="red accent-3" right>mdi-exit-to-app</v-icon>
           </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Confirm Log-out
            </v-card-title>
            <v-card-text>Are you sure you want to log-out?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray"
                text
                @click="dialogLogout = false">
                Cancel
              </v-btn>
              <v-btn
                color="green darken-3"
                text
                @click="logout">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       </v-layout>
     </v-col>
    </v-row>
   </v-container>
 </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import API from '../../../store/base'

export default {
  data() {
    return {
      dialogLogout: false,
      birthdayModal: false,
      date: '',
      data: {
        first_name: '',
        middle_name: '',
        birthday: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        last_name: '',
        ext_name: '',
        gender: '',
        contact_number1: '',
        contact_number2: '',
        year_level: '',
        tes_grant_type: '',
        tes_award: '',
        email: '',
        password: '',
        confirm_password: '',
        street: '',
        barangay: '',
        town: '',
        program: '',
        province: '',
        filenames: [],
        zipcode: '',
        gwa: '',
        academic_units: '',
        schoolyearinfo: [

        ]
      },
      schoolyear: [
         {
          value: '2016-2017', text: '2016-2017'
         },
         {
          value: '2017-2018', text: '2017-2018'
         },
         {
          value: '2018-2019', text: '2018-2019'
         },
         {
          value: '2019-2020', text: '2019-2020'
         },
         {
          value: '2020-2021', text: '2020-2021'
         },
         {
          value: '2021-2022', text: '2021-2022'
         },
         {
          value: '2022-2023', text: '2022-2023'
         },
         {
          value: '2023-2024', text: '2023-2024'
         },
         {
          value: '2024-2025', text: '2024-2025'
         },
         {
          value: '2025-2026', text: '2025-2026'
         },
         {
          value: '2026-2027', text: '2026-2027'
         },
         {
          value: '2027-2028', text: '2027-2028'
         },
         {
          value: '2028-2029', text: '2028-2029'
         },
         {
          value: '2029-2030', text: '2029-2030'
         },
         {
          value: '2030-2031', text: '2030-2031'
         },
         {
          value: '2031-2032', text: '2031-2032'
         },
         {
          value: '2032-2033', text: '2032-2033'
         },
         {
          value: '2033-2034', text: '2033-2034'
         },
         {
          value: '2034-2035', text: '2034-2035'
         },
         {
          value: '2035-2036', text: '2035-2036'
         },
         {
          value: '2036-2037', text: '2036-2037'
         },
         {
          value: '2037-2038', text: '2037-2038'
         },
         {
          value: '2038-2039', text: '2038-2039'
         },
         {
          value: '2039-2040', text: '2039-2040'
         },
       ],
       semester: [
         { value: '1st Semester', text: '1st Semester'},
         { value: '2nd Semester', text: '2nd Semester'},
       ],
      yearlevel: [{value: 'I', text: 'I'},{value: 'II', text: 'II'},{value: 'III', text: 'III'},{value: 'IV', text: 'IV'},{value: 'V', text: 'V'}],
       programs: [
        {value: '(BEEd) - Bachelor of Elementary Education ', text: '(BEEd) - Bachelor of Elementary Education'},
        {value: '(BECEd) - Bachelor of Early Childhood Education', text: '(BECEd) - Bachelor of Early Childhood Education'},
        {value: '(BSNEd) - Bachelor of Special Needs Education', text: '(BSNEd) - Bachelor of Special Needs Education'},
        {value: '(BPEd) - Bachelor of Physical Education', text: '(BPEd) - Bachelor of Physical Education'},
        {value: '(BTLEd) - Bachelor of Technology and Livelihood Education', text: '(BTLEd) - Bachelor of Technology and Livelihood Education'},
        {value: '(BSEd ENGLISH) - Bachelor of Secondary Education Major in English', text: '(BSEd ENGLISH) - Bachelor of Secondary Education Major in English'},
        {value: '(BSEd FILIPINO) - Bachelor of Secondary Education Major in Filipino', text: '(BSEd FILIPINO) - Bachelor of Secondary Education Major in Filipino'},
        {value: '(BSEd MATH) - Bachelor of Secondary Education Major in Math', text: '(BSEd MATH) - Bachelor of Secondary Education Major in Math'},
        {value: '(BSEd SOCIAL STUDIES) - Bachelor of Secondary Education Major in Social Studies', text: '(BSEd SOCIAL STUDIES) - Bachelor of Secondary Education Major in Social Studies'},
        {value: '(BSEd SCIENCE) - Bachelor of Secondary Education Major in Science', text: '(BSEd SCIENCE) - Bachelor of Secondary Education Major in Science'},
        {value: '(BSA) - Bachelor of Science in Accountancy', text: '(BSA) - Bachelor of Science in Accountancy'},
        {value: '(BSBA MM) - Bachelor of Science in Business Adminstration Major in Marketing Management', text: '(BSBA MM) - Bachelor of Science in Business Adminstration Major in Marketing Management'},
        {value: '(BSBA HRM) - Bachelor of Science in Business Adminstration Major in Human Resource Management', text: '(BSBA HRM) - Bachelor of Science in Business Adminstration Major in Human Resource Management'},
        {value: '(BSBA FM) - Bachelor of Science in Business Adminstration Major in Financial Management', text: '(BSBA FM) - Bachelor of Science in Business Adminstration Major in Financial Management'},
        {value: '(BSBA OM) - Bachelor of Science in Business Adminstration Major in Operations Management', text: '(BSBA OM) - Bachelor of Science in Business Adminstration Major in Operations Management'},
        {value: '(BSOA) - Bachelor of Science in Office Administration', text: '(BSOA) - Bachelor of Science in Office Administration'},
        {value: '(BSHM) - Bachelor of Science in Hospitality Management', text: '(BSHM) - Bachelor of Science in Hospitality Management'},
        {value: '(BS TM) - Bachelor of Science in Tourism Management', text: '(BS TM) - Bachelor of Science in Tourism Management'},
        {value: '(BS PSYCH) - Bachelor of Science in Psychology', text: '(BS PSYCH) - Bachelor of Science in Psychology'},
        {value: '(BSIT) - Bachelor of Science in Information Technology', text: '(BSIT) - Bachelor of Science in Information Technology'},
        {value: 'Technology', text: '(BLIS) - Bachelor of Library and Information Science'},
       ],
      rules: {
          required: value => !!value || 'Required.',
          mobile: value => value.length > 10 && value.length < 12 || 'Invalid Mobile Number',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
      },
      changePassword: false,
      testype: [
         {
           value: 'Listahanan', text: 'Listahanan'
         },
         {
           value: '4Ps', text: '4Ps'
         },
         {
           value: 'SWDI', text: 'SWDI'
         },
         {
           value: 'ESGPPA', text: 'ESGPPA'
         },
       ],
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
    document.title = "Account Settings"
    await this.$store.dispatch('auth/checkAuthUser')
    this.setDetails()
    this.initialLoading = false
  },
  methods: {
   ...mapActions('auth', ['logoutAuthUser']),
   removeFields(i){
     this.data.schoolyearinfo.splice(i, 1)
   },
   addFields(){
     this.data.schoolyearinfo.push({units: '', gwa: '', schoolyear: '', semester: ''})
   },
   async uploadProfileImage(){
      if(this.data.profileimg){
        let formData = new FormData();

        formData.append("img", this.data.profileimg);

        await API.post(`user/upload-files/image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          }).then(response => {
            this.data.profileimg = null
            this.$toast.success(response.data.msg)
          })
          .catch(error => {
            console.log({ error });
          });
            await this.$store.dispatch('auth/checkAuthUser')
      }
      else {
        this.$toast.error('Please select an image')
      }
   },
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
    setDrawerState(){
     this.$store.commit('updates/SET_DRAWER_STATE')
   },
   setDetails(){
     this.data.student_number = this.user.student_number
     this.data.first_name = this.user.info.first_name
     this.data.middle_name = this.user.info.middle_name
     this.data.last_name = this.user.info.last_name
     this.data.ext_name = this.user.info.ext_name
     this.data.gender = this.user.info.gender
     this.data.birthday = this.user.info.birthday
     this.data.contact_number1 = this.user.info.contact_number
     this.data.contact_number2 = this.user.info.contact_number2
     this.data.email = this.user.email
     this.data.street = this.user.info.street
     this.data.gwa = this.user.info.gwa
     this.data.units = this.user.info.academic_units
     this.data.barangay = this.user.info.barangay
     this.data.town = this.user.info.town
     this.data.province = this.user.info.province
     this.data.zipcode = this.user.info.zipcode
     this.data.program = this.user.info.program
     this.data.year_level = this.user.info.year_level
     this.data.tes_award = this.user.info.tes_award
     this.data.tes_application_number = this.user.info.tes_application_number
     this.data.tes_grant_type = this.user.info.tes_grant_type
     this.user.schoolinfo.forEach(data => {
       this.data.schoolyearinfo.push(data)
     });
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