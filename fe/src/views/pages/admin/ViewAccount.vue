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
     <v-col cols="11" md="8" lg="8" class="mr-6 ml-6">
       <v-layout align-center justify-center class="mt-8">
        <v-avatar color="primary" size="90">
          <img v-if="selectedAccount.info.image" :src="`https://be.tesgrant.info/images/${selectedAccount.info.image}`" height="90" width="90" alt="Profile Image">
          <span v-else class="white--text text-h5">{{ selectedAccount.info.first_name[0] }}{{selectedAccount.info.last_name[0]}}</span>
        </v-avatar>
       </v-layout>
       <v-layout class="mt-2">
         <v-col class="text-center">
          <h2 class="">{{ selectedAccount.info.first_name }} {{selectedAccount.info.last_name}}</h2>
          <p class="">{{ selectedAccount.email}}</p>
          <p class="">Date Registered: {{ selectedAccount.created_at}}</p>
          <v-layout align-center justify-center class="mt-3" column>
            <v-layout>
              <small>Enrollment Status:&nbsp;</small> 
              <v-chip class="white--text" :color="selectedAccount.enrollment_status == 'Unofficial' ? 'red darken-2' : 'green darken-2'" x-small>
                {{selectedAccount.enrollment_status}}
              </v-chip>
            </v-layout>
            <v-layout>
              <small>TES Status:&nbsp;</small> 
              <v-chip class="white--text" :color="selectedAccount.tes_status == 'No Records Found' ? 'red darken-2' : 'green darken-2'" x-small>
                {{selectedAccount.tes_status}}
              </v-chip>
            </v-layout>
          </v-layout>
         </v-col>
       </v-layout>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Personal Information
       </p>
       <v-divider class="mt-2"></v-divider>
        <v-text-field type="text" class="mt-5" hide-details="auto" readonly v-model="selectedAccount.student_number" outlined dense label="Student Number"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.first_name" outlined dense label="First Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.middle_name" outlined dense label="Middle Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.last_name" outlined dense label="Last Name"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.gender" outlined dense label="Gender"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.birthday" outlined dense label="Birthday"></v-text-field>
       <!-- <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.marital_status" outlined dense label="Marital Status"></v-text-field> -->
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.street" rows="2" outlined dense label="Street"></v-textarea>
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.barangay" rows="2" outlined dense label="Barangay"></v-textarea>
       <v-textarea type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.town" rows="2" outlined dense label="Town"></v-textarea>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.province" outlined dense label="Province"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.zipcode" outlined dense label="Zip Code"></v-text-field>
       <v-text-field class="pt-2" hide-details="auto" outlined v-model="selectedAccount.info.program" label="Program Name" dense></v-text-field>
       <v-text-field class="pt-2" hide-details="auto" outlined v-model="selectedAccount.info.year_level" label="Year Level" dense></v-text-field>
        
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Contact Information
       </p>
       <v-text-field type="email" readonly class="mt-4" hide-details="auto" v-model="selectedAccount.email" outlined dense label="Primary Email Address">
        <v-icon v-if="selectedAccount.email_verified_at" slot="append" color="green">mdi-check</v-icon>
        <v-icon v-else slot="append" color="red">mdi-window-close</v-icon>
       </v-text-field>
       <v-text-field type="text" readonly class="mt-4" hide-details="auto" v-model="selectedAccount.info.contact_number" outlined dense label="Primary Contact Number"></v-text-field>
       <v-text-field type="text" readonly class="mt-4" hide-details="auto" v-model="selectedAccount.info.contact_number2" outlined dense label="Secondary Contact Number"></v-text-field>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-account-circle</v-icon>
        Grant Type
       </p>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.tes_award" outlined dense label="TES Award Number"></v-text-field>
       <v-text-field type="text" class="mt-4" hide-details="auto" readonly v-model="selectedAccount.info.tes_application_number" outlined dense label="Application Number"></v-text-field>
       <v-select :items="testype" class="mt-4" hide-details="auto" readonly outlined v-model="selectedAccount.info.tes_grant_type" label="Type of TES Grant" dense></v-select>
       <p class="mt-6 text-uppercase primary--text">
        <v-icon color="primary">mdi-note-multiple</v-icon>
        School Info
       </p> 
       <v-divider class="mt-2"></v-divider>
       <div v-for="(data, i) in selectedAccount.schoolinfo" :key="i">
           <v-text-field class="pt-2" hide-details="auto" readonly outlined v-model="data.school_year" label="School Year" dense></v-text-field>
           <v-text-field class="pt-2" hide-details="auto" readonly outlined v-model="data.semester" label="Semester" dense></v-text-field>
           <v-text-field type="text" class="pt-2" hide-details="auto" readonly v-model="data.gwa" outlined dense label="GWA"></v-text-field>
           <v-text-field type="number" class="pt-2" hide-details="auto" readonly v-model="data.units" outlined dense label="Units Enrolled"></v-text-field>
       </div> 
      <v-layout class="mt-5">
         <v-dialog
            v-model="dialogApprove"
            persistent
            max-width="290"
            v-if="selectedAccount.status != 'Approved'">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="">
            Approve
            <v-icon color="green accent-3" right>mdi-account-check</v-icon>
           </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Approve
            </v-card-title>
            <v-card-text>Are you sure you want to approve this account? Make sure the TES Award Number is valid</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="gray"
                text
                @click="dialogApprove = false">
                Cancel
              </v-btn>
              <v-btn
                color="green darken-3"
                text
                @click="approveAccount">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
         <v-dialog
            v-model="dialogDelete"
            persistent
            max-width="290">
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed rounded text v-bind="attrs"
              v-on="on" class="red--text">
            Delete
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
                @click="deleteAccount">
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
      dialogApprove: false,
      dialogDelete: false,
      delete_data: {
        id: ''
      },
      approve_data: {
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
    ...mapState('auth', ['selectedAccount'])
  },
  mounted(){
   document.title = "View Account"
   if(this.selectedAccount == 0) return this.$router.back()
  },
  methods: {
    async deleteAccount() {
      this.delete_data.id = this.selectedAccount.id
      const { status, data } = await this.$store.dispatch('auth/deleteAccount', this.delete_data);
      if(status == 200){
        this.$router.back()
        this.$toast.success(data.msg)
      }
    },
    async approveAccount() {
      this.approve_data.id = this.selectedAccount.id
      const { status, data } = await this.$store.dispatch('auth/approveAccount', this.approve_data);
      if(status == 200){
        this.$toast.success(data.msg)
        this.$router.back()
      }
    },
  }
}
</script>