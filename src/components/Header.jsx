import React, { Component } from 'react'
import Title from './Title';
import BandeiraDoBrasil from '../bandeira-do-brasil.png'
import SubTitle from './SubTitle';

import './css/Header.css';

class Header extends Component {
  render() {
    const title = 'Estados do Brasil';
    const subTitle = 'Oficina - turma 28';
    return (
      <div className='h-container'>
        <div className='h-content'>
          <Title title={title} />
          <SubTitle subTitle={subTitle} />
        </div>
        <img src={BandeiraDoBrasil} alt="Bandeira do Brasil" className='h-content-img'/>
      </div>
    )
  }
}

export default Header;
