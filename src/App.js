import React, { Component } from 'react';
import {Boton} from './componentes/Boton.jsx'
import './App.css';
import { Entrada } from './componentes/Entrada.jsx'
import './estilos/Boton.css'
import './estilos/Entrada.css'
import { LimpiarBoton} from './componentes/LimpiarBoton.jsx'
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    };
  }
  render (){
    return(
      <div className='app'>
        <div className='calculadora'>
          <Entrada input={this.state.input}>

          </Entrada>
          <div className='row'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>/</Boton>
          </div>
          <div className='row'>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>X</Boton>
          </div>
          <div className='row'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className='row'>
            <Boton>.</Boton>
            <Boton>0</Boton>
            <Boton>=</Boton>
            <Boton>-</Boton>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
