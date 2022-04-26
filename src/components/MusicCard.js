import React from 'react';
import propTypes from 'prop-types';

export default function MusicCard(props) {
  const { getMusica, artist, album } = props;
  return (
    <div>
      <p>MusicCard</p>
      <h3 data-testid="artist-name">
        { artist }
      </h3>

      <h3 data-testid="album-name">
        { album }
      </h3>
      { getMusica.map((element) => (
        <>
          <audio
            data-testid="audio-component"
            key={ element.trackId }
            src={ element.previewUrl }
            controls
          >
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>
              audio
            </code>
          </audio>
          {/* <h3 data-testid="artist-name">{ element.artistName }</h3> */}
          <h3>{ element.trackName }</h3>
        </>
      )) }
    </div>
  );
}

MusicCard.propTypes = {
  getMusica: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  album: propTypes.string.isRequired,
};
