import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        <h1>Nil hoc Verbo Veritatis Verius</h1>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura.
        </a> 
        <h5>Site desenvolvido graças ao magnífico canal Iniciativa Condor e ao abençoado sacerdócio de Padre Paulo Ricardo</h5>
      </p>
    </FooterBase>
  );
}

export default Footer;
