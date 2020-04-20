import React, { Component } from 'react'
import '../estilos/LiampiarBoton.css'

export const LimpiarBoton = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
)