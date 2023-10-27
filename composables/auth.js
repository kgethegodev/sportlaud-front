import axios from "axios";
export const useAuth = () => {
  const config = useRuntimeConfig()

  const getRoles = async () => {
    const result = await $fetch(config.public.api_url + '/get-roles');
    return result.data;
  }

  const getProvinces = async () => {
      const result = await $fetch(config.public.api_url + '/get-provinces');
      return result.data;
  }

  const getCities = async (province_id) => {
    const result = await $fetch(config.public.api_url + '/get-cities',{
      method: 'POST',
      body: {
        'province_id' : province_id
      }
    });

    return result.data;
  }

  const registerUser =  (data) => {
     return axios(config.public.api_url + '/register', {
         method: 'POST',
         data: data
     });
  }

  return {
      getRoles,
      getProvinces,
      getCities,
      registerUser
  }
}
