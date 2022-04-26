import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default function Album() {
  const [getMusica, setGetMusica] = useState();
  const [getMus, setGetMus] = useState();
  const param = useParams();
  useEffect(() => {
    async function pegarMusic() {
      const getMusic = await getMusics(param.id);
      setGetMus(getMusic);
      const getMusicFilter = getMusic.filter((element) => element.kind === 'song');
      setGetMusica(getMusicFilter);
    }
    pegarMusic();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-testid="page-album">
      <Header />
      { getMusica
        ? (
          <MusicCard
            getMusica={ getMusica }
            artist={ getMus[0].artistName }
            album={ getMus[0].collectionName }
          />)
        : <span>Carregando...</span> }
      <p>album</p>
    </div>
  );
}
