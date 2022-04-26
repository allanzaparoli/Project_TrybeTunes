import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const num = 2;
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nomeAlbum, setNomeAlbum] = useState('');

  useEffect(() => {
    if (inputSearch.length >= num) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [inputSearch]);

  async function enviar(event) {
    event.preventDefault();
    setLoading(true);
    setNomeAlbum(inputSearch);
    setInputSearch('');
    const resultado = await searchAlbumsAPI(inputSearch);
    setResult(resultado);
    setLoading(false);
  }

  return (
    <div data-testid="page-search">
      <Header />
      { loading ? <h1>Carregando...</h1> : (
        <form onSubmit={ enviar }>
          <input
            type="text"
            data-testid="search-artist-input"
            onChange={ (event) => setInputSearch(event.target.value) }
            value={ inputSearch }
          />

          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ buttonDisable }
          >
            Pesquisar
          </button>
        </form>
      )}
      <p>Search</p>
      <h2>
        Resultado de álbuns de:
        {' '}
        { nomeAlbum }
        { result.length === 0 ? <p>Nenhum álbum foi encontrado</p>
          : result.map((element) => (
            <div key={ element.collectionId }>
              <Link
                data-testid={ `link-to-album-${element.collectionId}` }
                to={ `/album/${element.collectionId}` }
              >
                <img
                  alt="imagem"
                  key={ element.artistaId }
                  src={ element.artworkUrl100 }
                />
                <p>{ element.collectionName }</p>
              </Link>
            </div>
          ))}
      </h2>
    </div>
  );
}
