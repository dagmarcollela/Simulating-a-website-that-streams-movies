/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./App.css";
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  useEffect(() => {
    const loadAll = async () => {
      // Get all list
      let list = await tmdb.getHomeList();
      setMovieList(list);

      // getting the feature
      let originals = list.filter((i) => i.slug === "originals");
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      {featureData && <FeatureMovie item={featureData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
