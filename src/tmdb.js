/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "004abd7a2682a46f71cca8f43d29227d";
const API_BASE = "https://api.themoviedb.org/3";

/* 
    - Originals
    - Trending
    - Top rated
    - Action
    - Comedy
    - Horror
    - Novel
    - Documentary
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Original",
        items: await basicFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ), //213 code for only netflix
      },
      {
        slug: "trending",
        title: "Trending for you",
        items: await basicFetch(
          `/trending/all/week?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Top rated",
        items: await basicFetch(
          `/movie/top_rated?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ), //28 action
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ), //35 comedy
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ), //27 horror
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ), //10749 romance
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ), //99 documentary
      },
    ];
  },

  getMovieInfo: async (movieID, type) => {
    let info = {};

    if (movieID) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${movieID}?api_key=${API_KEY}`);
          break;
        case "tv":
          info = await basicFetch(`/tv/${movieID}?api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
