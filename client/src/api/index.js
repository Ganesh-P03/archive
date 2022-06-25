import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllPapers = () => api.get(`/papers`);
export const getPapersByCid = (Cid) => api.get(`/papers/${Cid}`);

const apis = {
  getAllPapers,

  getPapersByCid,
};

export default apis;
