import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllPapers = () => api.get(`/papers`);
export const getPapersByCid = (Cid) => api.get(`/papers/${Cid}`);
export const insertPaper = (payload) => api.post(`/paper`, payload);

const apis = {
  getAllPapers,
  insertPaper,
  getPapersByCid,
};

export default apis;
