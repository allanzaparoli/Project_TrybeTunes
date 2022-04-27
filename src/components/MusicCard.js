import React, { useState } from 'react';
import propTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

export default function MusicCard(props) {
  const [loading, setLoading] = useState(false);

  async function favoritar(musica) {
    setLoading(true);
    await addSong(musica);
    setLoading(false);
  }
  const { getMusica, artist, album } = props;
  return (
    <div>
      { loading && <h6>Carregando...</h6> }
      <p>MusicCard</p>
      <h3 data-testid="artist-name">
        { artist }
      </h3>

      <h3 data-testid="album-name">
        { album }
      </h3>
      { getMusica.length === 0 ? <h3>Carregando...</h3> : getMusica.map((element) => (
        <>
          <label htmlFor="Favorita">
            Favorita
            <input
              id="Favorita"
              type="checkbox"
              data-testid={ `checkbox-music-${element.trackId}` }
              onChange={ () => favoritar(element.trackId) }
            />
          </label>
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
