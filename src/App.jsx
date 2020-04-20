import React, { Component } from 'react';
import {Boton} from './componentes/Boton.jsx';
import './App.css';
import { Entrada } from './componentes/Entrada.jsx';
import './estilos/Boton.css';
import './estilos/Entrada.css';
import { LimpiarBoton} from './componentes/LimpiarBoton.jsx';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    };

    this.addToInput = this.addToInput.bind(this)
  }

addToInput = val => {
  this.setState({input: this.state.input + val});
}

handleEqual = () => {
  
}

  render (){
    return(
      <div className='app'>
        <div className='calculadora'>
          <Entrada input={this.state.input}>

          </Entrada>
          <div className='row'>
            <Boton handleClick={this.addToInput}>7</Boton>
            <Boton handleClick={this.addToInput}>8</Boton>
            <Boton handleClick={this.addToInput}>9</Boton>
            <Boton handleClick={this.addToInput}>/</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={this.addToInput}>4</Boton>
            <Boton handleClick={this.addToInput}>5</Boton>
            <Boton handleClick={this.addToInput}>6</Boton>
            <Boton handleClick={this.addToInput}>X</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={this.addToInput}>1</Boton>
            <Boton handleClick={this.addToInput}>2</Boton>
            <Boton handleClick={this.addToInput}>3</Boton>
            <Boton handleClick={this.addToInput}>+</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={this.addToInput}>.</Boton>
            <Boton handleClick={this.addToInput}>0</Boton>
            <Boton handleClick={() => this.handleEqual}>=</Boton>
            <Boton handleClick={this.addToInput}>-</Boton>
          </div>
          <div className='row'>
            <LimpiarBoton handleClear={() => this.setState({input: ''}) }>
              Borrar
            </LimpiarBoton>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
