import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "../components/Loader";
import { getMoreInfo } from "../store/videos/actions";
import {
  currentMovie,
  recommendations,
  similar,
  keywords
} from "../store/videos/selectors";

const mapStateToProps = state => {
  return {
    movie: currentMovie(state),
    recommendations: recommendations(state),
    similar: similar(state),
    keywords: keywords(state)
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMoreInfo }, dispatch);

const movieContainer = WrapedComponent => {
  @connect(
    mapStateToProps,
    mapDispatchToProps
  )
  class AsyncComponent extends Component {
    state = {
      loading: false
    };
    componentWillReceiveProps = async nextProps => {
      const currentId = this.props.match.params.id;
      const nextId = nextProps.match.params.id;

      if (currentId !== nextId) {
        this.setState({ loading: false });
        await this.props.getMoreInfo(nextId);
        this.setState({ loading: true });
      }
    };
    componentWillMount = async () => {
      const id = this.props.match.params.id;
      await this.props.getMoreInfo(id);
      this.setState({ loading: true });
    };
    render() {
      const { movie, recommendations, similar, keywords } = this.props;
      const newProps = { movie, recommendations, similar, keywords };
      const { loading } = this.state;
      if (!loading) return <div className='load'><Loader /></div>;
      return <WrapedComponent {...this.props} {...newProps} />;
    }
  }
  return AsyncComponent;
};
export default movieContainer;
