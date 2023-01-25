import React from "react";
import propTypes from 'prop-types';

class StatesCard extends React.Component {
  render() {
    const { nome, bandeira, curiosidade, sigla, capital, populacao, economia } = this.props;
    return (
      <div className="content-card">
        <h2>{nome}</h2>
        <img
          src={bandeira}
          alt={`Bandeira do estado ${nome}`}
          className="content-img-card"
        />
        <p
          className="content-p-curiosidade"
        >
          <strong>Curiosidade: </strong>
          {!curiosidade ? 'Nada consta' : curiosidade}
        </p>
        <p
          className="content-p-economia"
        >
          <strong>Economia: </strong>
          {economia}
        </p>
        <div className="container-infos">
          <p><strong>Sigla: </strong> {sigla}</p>
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>População:</strong> {populacao}</p>
        </div>
      </div>
    )
  }
}

StatesCard.propTypes = {
  nome: propTypes.string,
  bandeira: propTypes.string,
  curiosidade: propTypes.string,
  sigla: propTypes.string,
  capital: propTypes.string,
  economia: propTypes.string,
  populacao: propTypes.string,
}.isRequired;


// defaultProps 
// StatesCard.defaultProps = {
//   nome: 'Qualquer nome'
// }

export default StatesCard;