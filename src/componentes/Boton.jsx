import React, { Component } from 'react';
import '../estilos/Boton.css'


const esOperador = value => {
  return !isNaN(value) || value === '.' || value === '=';
}

export const Boton = props => (
      <div className={`boton-stilo ${
        esOperador(props.children) ? null : 'operador'
      }`}
      >
        {props.children}
      </div>
      );



