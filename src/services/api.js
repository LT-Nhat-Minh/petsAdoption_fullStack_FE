import axios from '../utils/axios-customize';

export const callFetchPets = async (id) => {
    const res =  await axios.get(`/pets`, { params: {id} });
    // console.log(res);
    return res;
}
export const callFetchAllPets = async () => {
    const res =  await axios.get(`/pets`);
    // console.log(res);
    return res;
}

export const callCreatePet = async (formData) => {
    try {
        const response = await axios.post('/pets', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating pet:', error);
        throw error;
    }
};
export const callDeletePet = async (id) => { 
    const res = await axios.delete(`/pets`, { data: { id } });
    return res;
}

export const callUpdatePet = async (formData) => {
  try {
    const response = await axios.put('/pets', formData, {
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating pet:', error);
    throw error;
  }
};
