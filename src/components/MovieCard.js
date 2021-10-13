import React from "react";
import { Rate } from "antd";

const MovieCard = ({
  movieImg,
  movieTitle,
  movieLikes,
  movieDislikes,
  movieViews,
}) => {
  return (
    <div className="card-wrapper">
      <img src={movieImg} alt="movie" />
      <div className="card-footer">
        <h3>{movieTitle}</h3>
        <div>
          <div>
            <p className="views">{movieViews} Views</p>
          </div>
          <div>
            {movieLikes}
            {movieDislikes}
          </div>
        </div>
        <div>
          <Rate disabled defaultValue={2} />
          <p>12K Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
