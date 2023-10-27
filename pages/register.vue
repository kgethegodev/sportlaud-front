<script  setup>
import TextInput from "~/components/global/forms/TextInput.vue";
import {useAuth} from "~/composables/auth.js";
const {getRoles, getProvinces, getCities, registerUser} = useAuth();
const loading = ref(false)
const roles = ref([]);
const provinces = ref([]);
const cities = ref([])
const slotTypeArray = [{id:1,name:'half-hourly'}, {id:2,name:'hourly'}, {id:3,name:'hour and a half'}, {id:1,name:'bi-hourly'}]
const daysOfTheWeekArray = [{id:1,name:'Monday'}, {id:2,name:'Tuesday'}, {id:3,name:'Wednesday'}, {id:4,name:'Thursday'}, {id:5,name:'Friday'}, {id:6,name:'Saturday'}, {id:7,name:'Sunday'}]
const formResponse = ref(null);
const errorMessage = ref(false)
const successMessage = ref(false)

// @TODO Add validation

const formData = reactive({
  role_id:    "",
  name:       "",
  surname:    "",
  email:      "",
  phone_number:      "",
  password:   "",
  location: {
              city_id:      "",
              province_id:  ""
  },
  trainer_days: {
              days:         reactive([]),
              start_time:   "",
              end_time:     "",
  },
  slot_type:  "",
  price:      "",
  position:   "",
});

const selected_province_id = ref(null);

onMounted(async () => {
  loading.value = true
  roles.value = await getRoles();
  provinces.value = await getProvinces();
  loading.value = false
})

watch(selected_province_id, async () => {
  loading.value = true
  formData.location.province_id = selected_province_id.value;
  cities.value = await getCities(selected_province_id.value);
  loading.value = false
})


const addDay = (day) =>{
  if(!formData.trainer_days.days.includes(day)){
    formData.trainer_days.days.push(day);
  }
  else {
    formData.trainer_days.days.splice(formData.trainer_days.days.indexOf(day), 1);
  }
}


const submit = async() => {
  formResponse.value = null
  errorMessage.value = false
  successMessage.value = false
  loading.value = true
  try {
    formResponse.value = await registerUser(formData)
    successMessage.value = formResponse.value.data.message
  }
  catch (error) {
    errorMessage.value = error.response.data.data[0]
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
   <loader v-if="loading"/>
  <div class="container">
    <div class="form-container">
      <div class="form-block">
        <h1>Register</h1>
        <sport-success-message v-if="successMessage" :message="successMessage"/>

        <form @submit.prevent="submit" v-else>
          <sport-error-message v-if="errorMessage" :errorMessage="errorMessage"/>
           <div class="form-row">
             <div>
               <text-input type="select" :options="roles" placeholder="Please select a role" v-model="formData.role_id"/>
             </div>
            <div>
              <text-input type="text" placeholder="Name" v-model="formData.name"/>
            </div>
            <div>
              <text-input type="text" placeholder="Surname" v-model="formData.surname"/>
            </div>
          </div>

          <div class="form-row">
            <div>
              <text-input type="text" placeholder="Email" v-model="formData.email"/>
            </div>
            <div>
              <text-input type="text" placeholder="Phone" v-model="formData.phone_number"/>
            </div>
          </div>

          <div class="form-row">
            <div>
              <text-input type="select" :options="provinces" placeholder="Please select your province" v-model="selected_province_id"/>
            </div>
            <div>
              <text-input type="select" :options="cities" placeholder="Please select your city" v-model="formData.location.city_id" :disabled="cities.length === 0"/>
            </div>
          </div>
          <div class="form-row">
            <div>
              <text-input type="password" placeholder="Password" v-model="formData.password"/>
            </div>
          </div>

          <div class="trainer-block" v-if="parseInt(formData.role_id) === 1">
              <div class="form-row">
                <div>
                  <text-input type="checkbox" :options="daysOfTheWeekArray" placeholder="Trainer days"  @change="addDay($event.target.value)"/>
                </div>
              </div>
            <div class="form-row">
              <div>
                <text-input type="time" placeholder="Start time" v-model="formData.trainer_days.start_time"/>
              </div>
              <div>
                <text-input type="time" placeholder="End time" v-model="formData.trainer_days.end_time"/>
              </div>
            </div>
              <div class="form-row">
                <div>
                  <text-input type="select" :options="slotTypeArray" placeholder="Slot duration" v-model="formData.slot_type"/>
                </div>
                <div>
                  <text-input type="number" placeholder="Price" v-model="formData.price"/>
                </div>
                <div>
                  <text-input type="text" placeholder="Position" v-model="formData.position"/>
                </div>
              </div>
          </div>

          <button type="submit" class="main-button">Register</button>
        </form>
      </div>
      <div class="form-image-block">
        <img src="/images/track.jpg" alt="Sport Laud Logo" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -6rem;
  gap: 4rem;
  align-items: center;

  .form-block, .form-image-block{
    width: 50%;
  }

  .form-block{
    padding-top: 6rem;
    margin-bottom: 8rem;

    form{
      display: block;
    }
  }

  .form-row{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    margin-bottom: 4rem;

    div{
      width: 100%;
    }
  }

}
</style>
