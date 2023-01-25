import React from "react";
import states from '../data';
import StatesCard from "./StatesCard";

import './css/Card.css';

class States extends React.Component {
  render() {
    return (
      <div className="container-cards">
        {states.map((state) => (
          <StatesCard
            key={state.sigla}
            // Forma de passar as props de forma resumida, usando o spread operator
            { ...state }
            // Forma de passar props individuais
            // nome={state.nome}
            // bandeira={state.bandeira}
            // curiosidade={state.curiosidade}
            // sigla={state.sigla}
            // capital={state.capital}
            // populacao={state.populacao}
            // economia={state.economia}
          />
        ))}
      </div>
    )
  }
}

export default States;
