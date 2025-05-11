import axios from "../utils/axios-customize";

export const callFetchPets = async (id, start, limit) => {
  const res = await axios.get(`/pets`, { params: { id, start, limit } });
  return res;
};

export const callCreatePet = async (formData) => {
  try {
    const response = await axios.post("/pets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating pet:", error);
    throw error;
  }
};
export const callDeletePet = async (id) => {
  const res = await axios.delete(`/pets`, { data: { id } });
  return res;
};

export const callUpdatePet = async (formData) => {
  try {
    const response = await axios.put("/pets", formData, {
      headers: {
        // 'Content-Type': 'application/json',
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating pet:", error);
    throw error;
  }
};

export const callRegister = async (name, email, password, phoneNumber) => {
  const res = await axios.post(`/auth/register`, {
    name,
    email,
    password,
    phoneNumber,
  });
  return res;
};

export const callLogin = (email, password) => {
  return axios.post("/auth/login", { email, password, delay: 1000 });
};

export const callFetchAccount = async () => {
  const res = await axios.get(`/auth/account`);
  return res;
};
