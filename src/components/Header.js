import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';

export default function Header() {
  const [saveName, setSaveName] = useState('Carregando...');
  useEffect(() => {
    getUser().then((resposta) => setSaveName(resposta.name));
  }, []);

  return (
    <header data-testid="header-component">
      <h1 data-testid="header-user-name">{ saveName }</h1>
      <p>Header</p>
      <Link to="/search" data-testid="link-to-search">Buscar</Link>
      <Link to="/favorites" data-testid="link-to-favorites">Página Favorita</Link>
      <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
    </header>
  );
}
