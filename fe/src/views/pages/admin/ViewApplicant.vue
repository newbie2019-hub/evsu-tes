<template>
 <div>
   <v-container class="mb-16">
    <v-btn text v-on:click.prevent="$router.back()" class="mt-5">
      <v-icon>
       mdi-arrow-left
      </v-icon>
       Return
    </v-btn>
    <v-row align="center" justify="center">
     <v-col md="7" lg="6" class="mr-6 ml-6">
       <v-layout align-center justify-center class="mt-8">
        <v-avatar color="primary" size="90">
          <img v-if="selectedApplicant.info.image" :src="`https://be.tesgrant.info/images/${selectedApplicant.info.image}`" height="90" width="90" alt="Profile Image">
          <span v-else class="white--text text-h5">{{ selectedApplicant.info.first_name[0] }}{{selectedApplicant.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-2">
         <v-col class="text-center">
          <h2 class="">{{ selectedApplicant.info.first_name }} {{selectedApplicant.info.last_name}}</h2>
          <p class="">{{ selectedApplicant.email}}</p>
          <p class="">Date Registered: {{ selectedApplicant.created_at}}</p>
          <v-chip class="white--text mt-1" :color="selectedApplicant.status == 'Unofficial' ? 'red darken-2' : 'green darken-2'" x-small>{{selectedApplicant.status == 'Official' ? 'Officially Enrolled' : 'Unofficial'}}</v-chip>
         </v-col>
       </v-layout>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Personal Information
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-text-field type="text" class="mt-5" hide-details="auto" readonly v-model="selectedApplicant.student_number" outlined dense label="Student Number"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.first_name" outlined dense label="First Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.middle_name" outlined dense label="Middle Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.last_name" outlined dense label="Last Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.gender" outlined dense label="Gender"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.birthday" outlined dense label="Birthday"></v-text-field>
       <!-- <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.marital_status" outlined dense label="Marital Status"></v-text-field> -->
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.street" rows="2" outlined dense label="Street"></v-textarea>
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.barangay" rows="2" outlined dense label="Barangay"></v-textarea>
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.town" rows="2" outlined dense label="Town"></v-textarea>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.province" outlined dense label="Province"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedApplicant.info.zipcode" outlined dense label="Zip Code"></v-text-field>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Contact Information
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-text-field type="email" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.email" outlined dense label="Primary Email Address">
         <v-icon v-if="selectedApplicant.email_verified_at" slot="append" color="green">mdi-check</v-icon>
         <v-icon v-else slot="append" color="red">mdi-window-close</v-icon>
       </v-text-field>
       <v-text-field type="email" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.email_secondary" outlined dense label="Secondary Email Address">
         <v-icon v-if="selectedApplicant.email_secondary_verified_at" slot="append" color="green">mdi-check</v-icon>
         <v-icon v-else slot="append" color="red">mdi-window-close</v-icon>
       </v-text-field>
       <v-text-field type="text" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.info.contact_number" outlined dense label="Primary Contact Number"></v-text-field>
       <v-text-field type="text" readonly class="mt-4" hide-details="auto" v-model="selectedApplicant.info.contact_number2" outlined dense label="Secondary Contact Number"></v-text-field>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Grant Type
       </p>
       <v-divider class="mt-2"></v-divider>
       <v-text-field type="text" class="mt-4" hide-details="auto" v-model="selectedApplicant.info.tes_award" outlined dense label="TES Award Number"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" v-model="selectedApplicant.info.tes_application_number" outlined dense label="Application Number"></v-text-field>
       <v-select :items="testype" class="mt-4" hide-details="auto" outlined v-model="selectedApplicant.info.tes_grant_type" label="Type of TES Grant" dense></v-select>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-note-multiple</v-icon>
        School Info
       </p> 
       <v-divider class="mt-2"></v-divider>
       <div v-for="(data, i) in selectedApplicant.schoolinfo" :key="i">
           <v-select :items="schoolyear" class="pt-2" hide-details="auto" readonly outlined v-model="data.school_year" label="School Year" dense></v-select>
           <v-select :items="semester" class="pt-2" hide-details="auto" readonly outlined v-model="data.semester" label="Semester" dense></v-select>
           <v-text-field type="text" class="pt-2" hide-details="auto" readonly v-model="data.gwa" outlined dense label="GWA"></v-text-field>
           <v-text-field type="number" class="pt-2" hide-details="auto" readonly v-model="data.units" outlined dense label="Units Enrolled"></v-text-field>
       </div> 
       <p class="mt-8 text-uppercase primary--text">
        Options
       </p> 
       <v-divider class="mt-2"></v-divider>
       <v-layout>
        <v-dialog
          v-model="dialogCreateAccount"
          persistent
          max-width="350">
          <template v-slot:activator="{ on, attrs }">
            <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="blue--text mt-2">
            Move to Users
            <v-icon color="blue accent-3">mdi-exit-to-app</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Confirm
            </v-card-title>
            <v-card-text>
              By moving to users, you are confirming that this user has been approved by the CHED-Unifast? This will create an account for the user with a default password. 
              <v-layout>
                <small class="mt-3">Note: The default password is the birthday + first name of the user <span class="font-weight-black">(e.g., 1999-01-01John)</span></small>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray"
                text
                @click="dialogCreateAccount = false">
                Cancel
              </v-btn>
              <v-btn
                color="green darken-3"
                text
                @click="moveToUsers">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

          <v-dialog
              v-model="dialogDelete"
              persistent
              max-width="350">
            <template v-slot:activator="{ on, attrs }">
            <v-btn small depressed rounded text v-bind="attrs"
                v-on="on" class="red--text mt-2">
              Delete User
              <v-icon color="red accent-3" right>mdi-delete-empty</v-icon>
            </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Confirm Delete
              </v-card-title>
              <v-card-text>Are you sure you want to delete this applicant?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="gray"
                  text
                  @click="dialogDelete = false">
                  Cancel
                </v-btn>
                <v-btn
                  color="green darken-3"
                  text
                  @click="deleteApplicant">
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
import { mapState } from 'vuex'
export default {
  data(){
    return {
      dialogDelete: false,
      dialogCreateAccount: false,
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
      delete_data: {
        id: ''
      },
      move_data: {
        id: ''
      },
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
    }
  },
  computed: {
    ...mapState('applicant', ['selectedApplicant'])
  },
  mounted(){
    document.title = "View Applicant"
    if(this.selectedApplicant == 0) return this.$router.back()
  },
  methods: {
   
    async deleteApplicant() {
      this.delete_data.id = this.selectedApplicant.id
      const { status, data } = await this.$store.dispatch('applicant/deleteApplicant', this.delete_data);
      if(status == 200){
        this.$router.back()
        this.$toast.success(data.msg)
      }
    },
    async moveToUsers(){
      this.isLoading = true
      this.move_data.id = this.selectedApplicant.id
      const {status, data} = await this.$store.dispatch('applicant/moveApplicant', this.move_data)
      if(status == 200){
        this.$router.back()
        this.$toast.success(data.msg)
      }
      else {
        this.$toast.error('Something went wrong')
      }
    }
  }
}
</script>