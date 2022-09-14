import React from 'react';

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        nome: 'JavaScript assíncrono',
        bloco: 9,
        status: 'já aprendi',
      },
      {
        nome: 'Composição de Componentes',
        bloco: 10,
        status: 'estou aprendendo',
      },
      {
        nome: 'Composição de Estados',
        bloco: 11,
        status: 'aprenderei',
      },
      {
        nome: 'Redux',
        bloco: 15,
        status: 'aprenderei',
      },
    ];

    return (
      <ul>
        {conteudos.map((string, index) => (
          <li key={ index }>
            Eu
            {' '}
            {string.status}
            {' '}
            o conteúdo
            {' '}
            {string.nome}
            {' '}
            no bloco
            {' '}
            {string.bloco}
          </li>
        ))}
      </ul>
    );
  }
}

export default Content;
