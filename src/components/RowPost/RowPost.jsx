import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "/src/axios.js";
import { image, base_url, API_KEY } from "/src/url.js";
import YouTube from "react-youtube";

function RowPost({ title, url, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [youtubeId, setyouTubeId] = useState();

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleKey = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.length !== 0) {
          setyouTubeId(res.data.results[0]);
        }
      });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="rowPost">
      <h2 className="rowPost__title">{title}</h2>
      <div className="rowPost__posters">
        {movies.map((movie, index) => {
          return (
            <img
              onClick={() => {
                handleKey(movie && movie.id);
                console.log(movie.id)
              }}
              key={index}
              className={isSmall ? "rowPost__small" : "rowPost__poster"}
              src={image + movie.poster_path}
              alt="poster"
            />
          );
        })}
      </div>
      {youtubeId && <YouTube videoId={youtubeId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
