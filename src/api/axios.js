import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // api_key: process.env.REACT_APP_API_KEY,
    api_key: "9e545237eefd88ed2b511db7cb76ea62",
    language: "ko-KR",
  },
});

export default instance;
