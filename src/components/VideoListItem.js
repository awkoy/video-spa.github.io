import React from "react";
import { Link } from "react-router-dom";

export default ({ title, img, description, genres, id }) => (
  <div className="video-list__item">
    <div className="video-list__item__img">
      <img src={`http://image.tmdb.org/t/p/w185/${img}`} alt={title} />
    </div>
    <div className="video-list__item__info">
      <div className="video-list__item__genres">
        Жанр:
        {genres
          ? genres.map(genre => (
              <span key={`${title}${genre.id}`}>{genre.name}</span>
            ))
          : null}
      </div>
      <h2 className="video-list__item__title">{title}</h2>
      <div className="video-list__item__description">{description}</div>
      <Link className="video-list__item__link" to={`/movie/${id}`} >Перейти к фильму</Link>
    </div>
  </div>
);
