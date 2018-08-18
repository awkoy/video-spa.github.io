import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import debounce from "lodash/debounce";
import { searchPopularVideo } from "../store/videos/actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchPopularVideo }, dispatch);

@connect(
  null,
  mapDispatchToProps
)
export default class VideoSearch extends Component {
  handleSearch = debounce(() => {
    this.props.searchPopularVideo(this.search.value);
  }, 500);

  render() {
    return (
      <div className="video__search">
        <div className="video__search__heading">Поиск по названию фильма:</div>
        <span className="video__search__wrapper">
            <input
                className="video__seacrh__field"
                id="class"
                type="text"
                placeholder="Например: Мстители"
                ref={input => (this.search = input)}
                onChange={this.handleSearch}
            />
            <label htmlFor="class" className='video__search__title'>Поиск</label>
        </span>
      </div>

    );
  }
}
