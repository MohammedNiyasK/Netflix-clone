import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "/src/axios.js";
import { genre_url, image_url } from "/src/url.js";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(genre_url.trending).then((res) => {
      setMovie(res.data.results[Math.round(Math.random() * 20)]);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${movie && image_url + movie.backdrop_path})`,
        }}
        className="banner"
      >
        <div className="banner__content">
          <h1 className="bannner__title">{movie && movie.title}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
            <h1 className="banner__description">{movie && movie.overview}</h1>
          </div>
        </div>
        <div className="banner__fade"></div>
      </div>
    </div>
  );
}

export default Banner;
