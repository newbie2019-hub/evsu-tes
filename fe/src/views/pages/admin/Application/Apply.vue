<template>
 <div>
   <v-container class="h-100">
    <v-row align="center" justify="center">
     <v-col class="pa-1" sm="10" md="10" lg="7">
      <v-btn text v-on:click.prevent="$router.back()" class="mt-5"> 
        <v-icon>
         mdi-arrow-left
        </v-icon>
        Return
      </v-btn>
      <v-layout class="pl-6 mt-5">
       <p class="headline">TES Application Form</p>
      </v-layout>
      <v-layout class="pl-6 pr-5">
       <p class="subtitle-2">The SASO office would like you to submit some of your informations. Please fill out the fields below</p>
      </v-layout>
      <v-layout class="pl-6 pr-5">
       <p class="subtitle-2 mt-4 red--text" v-if="!isValid">All fields are required!</p>
      </v-layout>
      <v-form ref="form">
        <v-stepper class="mt-2" flat v-model="currentStep" vertical non-linear>
           <v-stepper-step editable
             step="1">
             Student Data
           </v-stepper-step>

           <v-stepper-content step="1">
             <v-file-input type="file" class="pt-3" v-model="data.profileimg" hide-details="auto" outlined  dense show-size accept=".png,.jpg,.jpeg.,.webp,.svg " label="Profile Image" truncate-length="25"></v-file-input>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.student_id" outlined dense label="Student ID"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.first_name" outlined dense label="First Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.middle_name" outlined dense label="Middle Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.last_name" outlined dense label="Last Name"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.ext_name" outlined dense label="Ext. Name"></v-text-field>
             <v-select :items="gender" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.gender" label="Gender" dense></v-select>
             <!-- <v-select :items="status" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.marital_status" label="Marital Status" dense></v-select> -->
             <!-- <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.gwa" outlined dense label="GWA - Previous Sem"></v-text-field>
             <v-text-field type="number" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.units" outlined dense label="Units Enrolled"></v-text-field> -->

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
             
             <v-btn
               color="primary" small class="mt-3"
               @click="currentStep = 2">
               Next
             </v-btn>
           </v-stepper-content>

          <v-stepper-step editable
             step="2">
             School Information
           </v-stepper-step>

            <v-stepper-content step="2">
             <div v-for="(data, i) in data.schoolyearinfo" :key="i">
              <p class="mt-2">Please fill-in this data accurately</p>
              <v-divider class="mt-2 mb-2"></v-divider>
              <v-select :items="schoolyear" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.schoolyear" label="School Year" dense></v-select>
              <v-select :items="semester" class="pt-2" hide-details="auto" :rules="[rules.required]" outlined v-model="data.semester" label="Semester" dense></v-select>
              <v-text-field type="text" class="pt-2" hide-details="auto" v-model="data.gwa" outlined dense label="GWA"></v-text-field>
              <v-text-field type="number" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.units" outlined dense label="Units Enrolled"></v-text-field>
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
             <v-btn
               color="primary" class="mt-3"
               @click="currentStep = 3">
               Next
             </v-btn>
           </v-stepper-content>

           <v-stepper-step editable
             step="3">
             Address Information
           </v-stepper-step>

           <v-stepper-content step="3">
             <v-text-field type="text" class="pt-1" hide-details="auto" :rules="[rules.required]" v-model="data.street" outlined dense label="Street"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.barangay" outlined dense label="Barangay"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.town" outlined dense label="Town"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.province" outlined dense label="Province"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required]" v-model="data.zipcode" outlined dense label="Zip Code"></v-text-field>
             <v-btn
               color="primary" class="mt-3"
               @click="currentStep = 4">
               Next
             </v-btn>
           </v-stepper-content>

           <v-stepper-step editable
             step="4">
             TES Grant Info
           </v-stepper-step>

           <v-stepper-content step="4">
             <p>Leave blank as the admin will input this fields.</p>
             <v-text-field type="text" class="pt-2" hide-details="auto" v-model="data.tes_award" outlined dense label="TES Award Number"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" v-model="data.application_number" outlined dense label="Application Number"></v-text-field>
             <v-select :items="testype" class="pt-2" hide-details="auto" outlined v-model="data.tes_grant_type" label="Type of TES Grant" dense></v-select>
           </v-stepper-content> 

           <v-stepper-step step="5"  editable>
             Contact and Email Information
           </v-stepper-step>

           <v-stepper-content step="5">
             <p class="grey--text caption">A confirmation email will be sent to your account. Please verify both of your emails as this will be used to send you updates.</p>
             <v-text-field type="email" class="pt-2" :rules="[rules.required, rules.email]" hide-details="auto" v-model="data.email" outlined dense label="Primary Email Address"></v-text-field>
             <v-text-field type="email" class="pt-2" :rules="[rules.required, rules.email]" hide-details="auto" v-model="data.email_secondary" outlined dense label="Secondary Email Address"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required, rules.mobile]"  v-model="data.contact_number1" outlined dense label="Primary Contact Number"></v-text-field>
             <v-text-field type="text" class="pt-2" hide-details="auto" :rules="[rules.required, rules.mobile]"  v-model="data.contact_number2" outlined dense label="Secondary Contact Number"></v-text-field>
             
             
             <v-btn type="button" @click.prevent="dialog = true" small color="primary" :loading="isLoading" class="mt-3 mr-2">
               Submit
             </v-btn>
             <v-btn type="button" @click.prevent="$router.back()" small color="grey" class="mt-3">
               Cancel
             </v-btn>
           </v-stepper-content>

            
         </v-stepper>
       </v-form>
     </v-col>
    </v-row>
   </v-container>

   <v-dialog
      v-model="dialog"
      max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          Confirm Application
        </v-card-title>

        <v-card-text>
          Are you willing to send your data to be part of the TES grantees?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click.prevent="apply">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 </div>
</template>
<script>
import API from '../../../../store/base'

export default {
   data () {
     return {
       dialog: false,
       birthdayModal: false,
       rules: {
         required: value => !!value || 'Required.',
         mobile: value => value.length > 10 && value.length < 12 || 'Invalid Mobile Number',
         email: value => {
           const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           return pattern.test(value) || 'Invalid e-mail.'
         },
       },
       currentStep: 1,
       isValid: false,
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
       date: '',
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
        program: '',
        province: '',
        filenames: [],
        zipcode: '',
        gwa: '',
        academic_units: '',
        schoolyearinfo: [
          {
            units: '',
            gwa: '',
            schoolyear: '',
            semester: '',
          },
        ]
       },
       gender: [
        { value: "Male", text: "Male"},
        { value: "Female", text: "Female"},
       ],
       status: [
         {
           value: 'Single', text: 'Single'
         },
         {
           value: 'Married', text: 'Married'
         },
         {
           value: 'Widowed', text: 'Widowed'
         },
         {
           value: 'Divorced', text: 'Divorced'
         },
       ],
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
     }
   },
   created(){
    // testData()
   },
   methods: {
    removeFields(i){
      this.data.schoolyearinfo.splice(i, 1)
    },
    addFields(){
      this.data.schoolyearinfo.push({units: '', gwa: '', schoolyear: '', semester: ''})
    },
    async apply(){
     this.dialog = false
     this.isValid = this.$refs.form.validate()
     if(this.isValid){
    
      this.isLoading = true

      let formData = new FormData();

      formData.append("img", this.data.profileimg);

      await API.post(`user/upload-files/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        }).then(response => {
          console.log(response.data)
          this.data['img'] = response.data
        })
        .catch(error => {
            console.log({ error });
        });

       const {data, status} = await this.$store.dispatch('applicant/saveApplicant', this.data)
       this.checkStatus(data, status, '', 'updates/getApplicants')
       if(status == 200){
        this.$router.back()
        this.$toast.success('Login to your account to view updates and application status')
        this.clearData()
       }
       this.isLoading = false

     }
     else {
      this.$toast.error('Please fill in all the fields')
      this.isLoading = false
     }
       this.isLoading = false

    },
    clearData(){
     this.data = {
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
        // hasDisability: false,
        // father_first_name: '',
        // father_middle_name: '',
        // father_last_name: '',
        // father_monthly_salary: '',
        // mother_first_name: '',
        // mother_maiden_name: '',
        // mother_last_name: '',
        // mother_monthly_salary: '',
        // siblings_monthly_salary: '',
        house_member: '',
        household_number: '',
     }
    }
   }
}
</script>
<style>

</style>