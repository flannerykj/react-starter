// @flow
import React, { Component } from 'react';
import type { Episode } from '../../models/episodes';

const EpisodeListItem = ({title, published_on, description}: Episode) => {
  return(
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default EpisodeListItem;
