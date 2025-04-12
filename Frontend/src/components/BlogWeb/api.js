import axios from "axios";


const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api`, // adjust this if your backend runs elsewhere
});


export const getBlogs = () => api.get("/blogs");
export const getBlogById = (id) => api.get(`/blogs/${id}`);
export const createBlog = (data, token) =>
  api.post("/blogs", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateBlog = (id, data, token) =>
  api.put(`/blogs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteBlog = (id, token) =>
  api.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });



