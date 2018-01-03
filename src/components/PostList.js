import React, { Component } from 'react';

class PostPreview extends Component {
  componentWillMount(){
    this.props.getPosts();
  }
  render() {
    return(
      <div>
        <h1>New Section</h1>
      </div>
    )
  }
}

export default PostPreview;
