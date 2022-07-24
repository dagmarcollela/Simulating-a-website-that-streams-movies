/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";

export default () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      // Get all list
      let list = await tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <div>{item.title}</div>
        ))}
      </section>
    </div>
  );
};
