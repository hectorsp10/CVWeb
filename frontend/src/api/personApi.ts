// src/api/personApi.ts
import axios from "axios";

const API_URL = "http://localhost:8080/api/person"; // ajusta a tu endpoint

export const getPersons = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};