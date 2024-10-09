import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjc3MjVmNWE5MGEzODVmMWUxYTc2MzE1NDRhYTdhNyIsInN1YiI6IjY0OTE1OWM1YzJmZjNkMDBmZmJkMzNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZjjZqzyBFHIeB5SLT68EncUc5xxphFzCjY-5x55aZVU"

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  console.log("urllllll",url,params);
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    console.log("kkkkkkk",data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

