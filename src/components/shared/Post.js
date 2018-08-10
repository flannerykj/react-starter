// @flow
import React, { Component } from 'react';
import type { Post } from '../../models/posts';

const PostItem = ({title, published_on, description}: Post) => {
  return(
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default PostItem;
