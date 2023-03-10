import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../API/DataAxiosGet";
import "./Grid.css";

function Grid() {
  const movieList = useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  // console.log(movies);

  useEffect(() => {
    let newArray = movieList.map((obj) => obj);
    setMovies(newArray);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex">
      {movies.map((obj) => {
        const { titleText, primaryImage } = obj;
        let rate = obj.ratingsSummary["aggregateRating"];
        let color =
          rate > 5
            ? "rgb(189, 215, 60)"
            : rate > 3
            ? "rgb(215, 135, 60)"
            : "rgb(215, 60, 60)";

        return (
          <div className="flex-container" key={obj.id}>
            <Link to={`/MovieReview/MovieDetail/${obj.id}`}>
              <img
                className="image"
                alt={titleText["text"]}
                src={primaryImage["url"]}
              ></img>
            </Link>

            <div className="title">{titleText["text"]}</div>
            <div
              className="rate"
              style={{
                backgroundColor: color,
              }}
            >
              {rate}
            </div>
            <div className="released">{obj.releaseDate["year"]}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
