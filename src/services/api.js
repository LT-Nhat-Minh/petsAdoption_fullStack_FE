import axios from '../utils/axios-customize';

export const callFetchPets = async (id) => {
    const res =  await axios.get(`/pets`, { params: {id} });
    // console.log(res);
    return res;
}