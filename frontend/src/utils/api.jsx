// import axios from "axios";


// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//         "Content-Type": "application/json",
//     }
// });

// export default api;

const api = axios.create({
  baseURL: "https://pandiyarajan-fullstack-portfolio-django-igcq.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
