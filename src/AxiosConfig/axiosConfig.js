import axios from "axios";

const instance = axios.create({
     baseURL:"https://api.themoviedb.org/3/",
     params: {
          api_key:"f0a869e953eb134cc42636920078d226"
     }
})
export default instance