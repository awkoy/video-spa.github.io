import React, { Component } from "react";
import VideoList from "../containers/VideoList";
import VideoSearch from "../containers/VideoSearch";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <VideoSearch />
        <VideoList />
      </div>
    );
  }
}
