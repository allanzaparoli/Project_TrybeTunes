import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const num = 2;

  useEffect(() => {
    if (inputSearch.length >= num) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [inputSearch]);

  return (
    <div data-testid="page-search">
      <Header />
      <form>
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
      <p>Search</p>
    </div>
  );
}
