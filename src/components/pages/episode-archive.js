// @flow
import React, { Component } from 'react';
import {
  History
} from 'react-router-dom';
import { connect } from 'react-redux';
import EpisodeListItem from '../shared/EpisodeListItem';
import { fetchEpisodes } from '../../actions/episodes';
import type { EpisodesContainer } from '../../models/episodes';

type Props = {
  episodes: EpisodesContainer,
  history: History
}

export default class EpisodeArchive extends Component<Props> {

  render() {
    return (
      <div className='main'>
        <h1>Episode Archive</h1>
      </div>
    );
  }
}
const mapStateToProps = (appState) => {
  episodes: appState.episodes
}
const mapDispatchToProps = (dispatch) => ({
  fetchEpisodes: (() => dispatch(fetchEpisodes()))
});
