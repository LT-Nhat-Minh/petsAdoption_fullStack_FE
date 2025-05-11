import axios from "../utils/axios-customize";

export const callFetchPets = async (id, start, limit) => {
  const res = await axios.get(`/pets`, { params: { id, start, limit } });
  return res;
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
