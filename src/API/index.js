import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "906a3df33bd2258d14e58f917e0c1d64";

const API = axios.create({
  baseURL: URL
});

const req = (method, url, params = "") => API[method](`${url}?api_key=${API_KEY}&language=ru${params}`);

const video = {
  list: page => req("get", "/movie/popular", `&page=${page}`),
  genres: () => req("get", "/genre/movie/list"),
  movie: id => req("get", `/movie/${id}`),
  recommendations: id => req("get", `movie/${id}/recommendations`),
  similar: id => req("get", `movie/${id}/similar`),
  keywords: id => req("get", `movie/${id}/keywords`),
  search: data => req("get", "/search/movie", `&query=${data}`)
};

export { API, video };
