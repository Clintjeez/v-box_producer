import React from "react";
import { moviesData } from "../../services/moviesData";
import MovieCard from "../../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/Showcase.scss";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="movie-list">
          <h2 className="title">Top Movies</h2>
          {/* <Swiper>
            {moviesData.map((movie) => {
              return (
                <SwiperSlide>
                  <MovieCard
                    movieImg={movie.image}
                    movieTitle={movie.title}
                    movieLikes={movie.likes}
                    movieDislikes={movie.dislike}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
