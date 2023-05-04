import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: 'c8fbf26aaf1719f4073eb2d835a7332f',
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovie = async () => {
  const { data } = await axios.get(`/trending/movie/day?${searchParams}`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}?${searchParams}`);
  return data;
};

export const getCastById = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return data;
};

export const getReviewsById = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data;
};
