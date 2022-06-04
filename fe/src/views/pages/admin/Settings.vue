<template>
 <div>
   <v-container class="mb-15">
    <v-row align="center" justify="center">
     <v-col cols="11" md="10" lg="8" class="mr-6 ml-6">
       <v-app-bar-nav-icon class="mt-6" @click.stop="setDrawerState"></v-app-bar-nav-icon>
       <v-layout align-center justify-center class="mt-8">
        <v-avatar color="primary" size="90">
          <img v-if="user.info.image" :src="`http://127.0.0.1:8000/images/${user.info.image}`" height="90" width="90" alt="Profile Image">
          <span v-else class="white--text text-h5">{{ user.info.first_name[0] }}{{user.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-1">
         <v-col class="text-center">
          <p class="text-h5 font-weight-bold">{{ user.info.first_name }} {{user.info.last_name}}</p>
          <p class="caption">{{ user.email}}</p>
          <p class="caption grey--text">ADMINISTRATOR</p>
         </v-col>
       </v-layout>
       <p class="mt-6 text-uppercase primary--text">
         <v-icon color="primary">mdi-account-circle</v-icon>
         Profile Image
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-form ref="imageupload" @submit.prevent="uploadProfileImage">
         <v-file-input type="file" v-model="data.profileimg" show-size accept=".png,.jpg,.jpeg.,.webp,.svg " label="Upload Image" truncate-length="25"></v-file-input>
         <p class="grey--text">Note: This will replace your current image if you have.</p>
         <v-btn type="submit" color="success darken-1 mt-3" dark>Upload</v-btn>
       </v-form>

       <p class="mt-6 text-uppercase primary--text">
         <v-icon color="primary">mdi-account-circle</v-icon>
         Personal Information
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-form ref="form"  class="mt-5">
         <v-row>
          <v-col class="pa-1 white--text mt-2" cols="12" sm="6" md="6" lg="6" >
            <v-text-field type="text" hide-details="auto" :loading="initialLoading" clearable outlined v-model="data.first_name" label="First Name" dense :rules="[rules.required]"></v-text-field>
          </v-col>
          <v-col class="pa-1 white--text mt-2" cols="12" sm="6" md="6" lg="6" >
            <v-text-field type="text" hide-details="auto" :loading="initialLoading" clearable outlined v-model="data.middle_name" label="Middle Name" dense :rules="[rules.required]"></v-text-field>
          </v-col>
          <v-col class="pa-1 white--text mt-2" cols="12" sm="6" md="6" lg="6" >
            <v-text-field type="text" hide-details="auto" :loading="initialLoading" clearable outlined v-model="data.last_name" label="Last Name" dense :rules="[rules.required]"></v-text-field>
          </v-col>
          <v-col class="pa-1 white--text mt-2" cols="12" sm="6" md="6" lg="6" >
            <v-text-field type="text" hide-details="auto" :loading="initialLoading" clearable outlined v-model="data.contact_number" label="Contact Number" dense :rules="[rules.required]"></v-text-field>
          </v-col>
          <v-col class="pa-1 white--text mt-2" cols="12" sm="6" md="6" lg="6" >
            <v-select :items="gender" outlined v-model="data.gender" label="Select gender" dense></v-select>
          </v-col>
         </v-row>
         <p class="mt-4 text-uppercase primary--text">
            <v-icon color="primary">mdi-account-key</v-icon>
            Login Credentials
            </p>
          <v-divider class="mt-2 mb-5"></v-divider>
          <v-text-field type="text" hide-details="auto" :loading="initialLoading" clearable outlined v-model="data.email" :rules="[rules.required, rules.email]" label="Email Address" prepend-inner-icon="mdi-email" dense>
          </v-text-field>
          <v-text-field type="password" 
            clearable 
            outlined 
            hide-details="auto"
            v-model="data.password" 
            label="Password"  
            class="mt-3"
            prepend-inner-icon="mdi-lock" 
            hint="If empty, password wont be changed"
            persistent-hint
            dense>
          </v-text-field>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="320">
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
              <v-text-field type="password" hide-details="auto" hint="Current Password" class="pl-5 pr-5" :rules="[rules.required]" required counter clearable outlined v-model="data.confirm_password" label="Current password" dense></v-text-field>
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
       <p class="mt-6 text-uppercase primary--text">
         <v-icon color="primary">mdi-file-compare</v-icon>
         Officially Enrolled
        </p>
       <v-divider class="mt-2 mb-2"></v-divider>
       <v-form ref="filechecking" @submit.prevent="uploadFile">
         <v-file-input type="file" v-model="data.filechecking" show-size accept=".xlsx,.csv" hide-details="auto" label="Officially Enrolled List" truncate-length="25"></v-file-input>
         <p class="grey--text mt-2">Note: This will update duplicate records from the previous import if it has and will also update the status of the applicants record</p>
         <v-btn type="submit" color="success darken-1 mt-3" dark>Upload</v-btn>
       </v-form>

       <p class="mt-6 text-uppercase primary--text">
         <v-icon color="primary">mdi-file-compare</v-icon>
         TES Grantee
        </p>
       <v-divider class="mt-2 mb-2"></v-divider>
       <v-form ref="filechecking" @submit.prevent="uploadTESGrantee">
         <v-file-input type="file" v-model="data.tesfile" show-size accept=".xlsx,.csv" hide-details="auto" label="TES Grantee Masterlist" truncate-length="25"></v-file-input>
         <v-select :items="fileType" class="pt-2 mt-3" hide-details="auto" :rules="[rules.required]" outlined v-model="data.type" label="File Upload For" dense></v-select>
         <p class="grey--text mt-2">Note: This will update duplicate records from the previous import if it has and will also update the status of the users record</p>
         <v-btn type="submit" color="success darken-1 mt-3" dark>Upload</v-btn>
       </v-form>

       <v-layout class="mt-5">
         <v-dialog
            v-model="dialogLogout"
            persistent
            max-width="290">
          <template v-slot:activator="{ on, attrs }">
           <v-btn depressed color="red darken-1" v-bind="attrs"
              v-on="on" class="white--text">
            Log-out
            <v-icon color="white" right>mdi-exit-to-app</v-icon>
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
      data: {
        // profileimg: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        contact_number: '',
        email: '',
        password: '',
        type: 'TES Grantees',
        confirm_password: '',
        // filechecking: ''
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
      ],
      fileType: [
        { value: "TES Grantees", text: "TES Grantees"},
        { value: "Delisted Grantees", text: "Delisted Grantees"},
        { value: "Graduated Grantees", text: "Graduated Grantees"},
      ]
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  async mounted(){
    this.initialLoading = true
    document.title = 'Account Settings'
    await this.$store.dispatch('auth/checkUser')
    this.setDetails()
    this.initialLoading = false
  },
  methods: {
   ...mapActions('auth', ['logoutUser']),
   setDrawerState(){
     this.$store.commit('updates/SET_DRAWER_STATE')
   },
   async logout(){
     this.isLoading = true
     const res = await this.logoutUser()
     if(res.status == 200){
       this.$router.push('/')
     }
     else if (res.status == 401){
       this.$store.commit('auth/UNSET_USER')
       this.$router.push('/')
     }
     this.isLoading = false
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
            await this.$store.dispatch('auth/checkUser')
     }
     else {
       this.$toast.error('Please select an image')
     }
   },
   async uploadFile(){
     if(this.data.filechecking){
        let formData = new FormData();

        formData.append("filechecking", this.data.filechecking);
        formData.append("type", 'Official');

        await API.post(`user/upload-files`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          }).then(response => {
              this.$toast.success(response.data.msg)
          })
          .catch(error => {
              console.log({ error });
         });
     }
     else {
       this.$toast.error('Please select a file')
     }
   },
   async uploadTESGrantee(){
     if(this.data.tesfile){
        let formData = new FormData();

        formData.append("filechecking", this.data.tesfile);
        formData.append("type", this.data.type);

        await API.post(`user/upload-files/tes`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          }).then(response => {
            this.data.tesfile = null
            this.$toast.success(response.data.msg)
          })
          .catch(error => {
              console.log({ error });
         });
     }
     else {
       this.$toast.error('Please select a file')
     }
   },
   setDetails(){
     this.data.first_name = this.user.info.first_name
     this.data.middle_name = this.user.info.middle_name
     this.data.last_name = this.user.info.last_name
     this.data.gender = this.user.info.gender
     this.data.contact_number = this.user.info.contact_number
     this.data.email = this.user.email
   },
   async save(){
     this.$refs.form.validate()
     const {status, data} = await this.$store.dispatch('auth/updateAdminAccount', this.data)
     this.checkStatus(data, status, '', 'auth/checkUser')
     this.data.password = ''
   }
  }
}
</script>