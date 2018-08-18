import React, { Component } from "react";
import { Link } from "react-router-dom";
import movieContainer from "../containers/MovieContainer";
import Swiper from "react-id-swiper";

@movieContainer
export default class Movie extends Component {
  render() {
    const { movie, recommendations, similar, keywords } = this.props;
    const sliderRecommendationsParams = {
      slidesPerView: 4,
      rebuildOnUpdate: true
    };
    const sliderSimilarParams = {
        slidesPerView: 4,
        rebuildOnUpdate: true
    };
    return (
      <div className="container">
        <div className="movie">
          <div className="movie__backdrop">
            {movie ? (
              <img
                src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                alt={movie.title}
              />
            ) : null}
          </div>
          <div className="movie__title">
            {movie.title} / <span>{movie.original_title}</span>
          </div>
          <div className="movie__slogan">
            {movie.tagline ? (
              <div className="movie__slogan">
                Слоган:
                <span>{movie.tagline}</span>
              </div>
            ) : null}
          </div>
          <div className="movie__rating">
            {movie.vote_average ? (
              <div className="movie__rating">
                Рейтинг фильма:
                <span>
                  {movie.vote_average}
                  /10
                </span>
              </div>
            ) : null}
          </div>
          <div className="movie__description">
            {movie.overview ? (
              <div className="movie__slogan">
                Описание фильма:
                <span>{movie.overview}</span>
              </div>
            ) : null}
          </div>
          <div className="movie__recommendations">
            Рекомендованное к просмотру:
            <br/>
            <Swiper {...sliderRecommendationsParams}>
              {recommendations.length
                ? recommendations.map(item => (
                    <Link
                      className="movie__recommendations__link"
                      key={item.id}
                      to={`/movie/${item.id}`}
                    >
                      <div>
                        <img
                          className="movie__recommendations__poster"
                          src={`http://image.tmdb.org/t/p/w185/${
                            item.poster_path
                          }`}
                          alt={item.title}
                        />
                      </div>
                      <div className="movie__recommendations__title">
                        {item.title}
                      </div>
                    </Link>
                  ))
                : null}
            </Swiper>
            <div />
          </div>
          <div className="movie__recommendations">
            Похожие по тематике:
            <br/>
              <Swiper {...sliderSimilarParams}>
                  {similar.length
                      ? similar.map(item => (
                          <Link
                              className="movie__recommendations__link"
                              key={item.id}
                              to={`/movie/${item.id}`}
                          >
                              <div>
                                  <img
                                      className="movie__recommendations__poster"
                                      src={`http://image.tmdb.org/t/p/w185/${
                                          item.poster_path
                                          }`}
                                      alt={item.title}
                                  />
                              </div>
                              <div className="movie__recommendations__title">
                                  {item.title}
                              </div>
                          </Link>
                      ))
                      : null}
              </Swiper>
          </div>
          <div className="movie__recommendations">
            Похожие по тегам:
            <br/>
            {keywords.length
              ? keywords.map(item => (
                  <Link
                    className="movie__keywords__link"
                    key={item.id}
                    to={`/movie/${item.id}`}
                  >
                    {item.name}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}
