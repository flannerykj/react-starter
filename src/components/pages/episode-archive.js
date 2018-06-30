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
  history: History,
  fetchEpisodes: () => void
}

class EpisodeArchive extends Component<Props> {

  componentWillMount() {
    if (this.props.episodes.needsUpdate) {
      this.props.fetchEpisodes();
    }
  }

  render() {
    return (
      <div className='main'>
        <h1>Episode Archive</h1>
        {this.props.episodes.data.map(
          (episode) => <EpisodeListItem {...episode} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (appState) => ({
  episodes: appState.episodes
});
const mapDispatchToProps = (dispatch) => ({
  fetchEpisodes: (() => dispatch(fetchEpisodes()))
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeArchive);
