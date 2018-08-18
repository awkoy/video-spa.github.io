import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import InfiniteScroll from "react-infinite-scroller";
import throttle from "lodash/throttle";
import {
  popularVideoList,
  popularVideoGenres
} from "../store/videos/selectors";
import { loadPopularVideo, loadGenreList } from "../store/videos/actions";
import VideoListItem from "../components/VideoListItem";

const mapStateToProps = state => {
  return {
    popularVideoList: popularVideoList(state),
    popularVideoGenres: popularVideoGenres(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadPopularVideo, loadGenreList }, dispatch);

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class VideoList extends Component {
  async componentDidMount() {
    this.props.loadGenreList();
  }
  loadMore = throttle(page => {
    this.props.loadPopularVideo(page);
  }, 1000);
  render() {
    const { popularVideoList, popularVideoGenres } = this.props;

    const getGenresForID = videoGenresIds => {
      const genres = popularVideoGenres;
      return genres.filter(allGenresItem =>
        videoGenresIds.some(id => id === allGenresItem.id)
      );
    };
    return (
      <div>
        <InfiniteScroll pageStart={1} loadMore={this.loadMore} hasMore={true}>
          {popularVideoList.map(item => (
            <VideoListItem
              key={item.id}
              title={item.title}
              id={item.id}
              img={item.poster_path}
              description={item.overview}
              genres={getGenresForID(item.genre_ids)}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
