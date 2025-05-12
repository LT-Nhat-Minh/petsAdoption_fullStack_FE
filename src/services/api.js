import axios from "../utils/axios-customize";

export const callFetchPets = async (id, start, limit) => {
  return await axios.get(`/pets`, { params: { id, start, limit } });
};

export const callCreatePet = async (formData) => {
  return await axios.post("/pets", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const callDeletePet = async (id) => {
  return await axios.delete(`/pets`, { params: { id } });
};

export const callUpdatePet = async (formData) => {
  return await axios.put("/pets", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const callRegister = async (name, email, password, phoneNumber) => {
  return await axios.post("/auth/register", {
    name,
    email,
    password,
    phoneNumber,
  });
};

export const callLogin = (email, password) => {
  return axios.post("/auth/login", { email, password, delay: 1000 });
};

export const callFetchAccount = async () => {
  return await axios.get("/auth/account");
};

export const callFetchUsers = async (id, start, limit) => {
  return await axios.get(`/users`, { params: { id, start, limit } });
};

export const callCreateUser = async (
  name,
  email,
  password,
  phoneNumber,
  role
) => {
  return await axios.post("/users", {
    name,
    email,
    password,
    phoneNumber,
    role,
  });
};

export const callDeleteUser = async (id) => {
  return await axios.delete(`/users`, { params: { id } });
};

export const callUpdateUser = async (id, name, email, phoneNumber, role) => {
  return await axios.put(`/users`, {
    id,
    name,
    email,
    phoneNumber,
    role,
  });
};

export const callFetchPost = async (id) => {
  return await axios.get(`/posts`, { params: { id } });
};

export const callCreatePost = async (formData) => {
  return await axios.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const callUpdatePost = async (formData) => {
  return await axios.put("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const callDeletePost = async (id) => {
  return await axios.delete(`/posts`, { params: { id } });
};
