// @flow
import React, { Component } from 'react';
import {
  History
} from 'react-router-dom';
import { connect } from 'react-redux';
import Post from '../shared/Post';
import { fetchPosts } from '../../actions/posts';
import type { PostsContainer } from '../../models/posts';

type Props = {
  posts: PostsContainer,
  history: History,
  fetchPosts: () => void
}

class Home extends Component<Props> {

  componentWillMount() {
    if (this.props.posts.needsUpdate) {
      this.props.fetchPosts();
    }
  }

  render() {
    return (
      <div className='main'>
        <h1>Post Feed</h1>
        {this.props.posts.data.map(
          (post) => <Post {...post} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (appState) => ({
  posts: appState.posts
});
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (() => dispatch(fetchPosts()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
