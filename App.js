import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props){
//   return (<h2>{props.title}</h2>);
// }


// const Hello = (props) => <h2>{props.title}</h2>;

class Hello extends Component {
  render() {  //render no tiene parametros//
    return <h2>{this.props.title}</h2> //se pasa con el "this"
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumber, 
      multiply,
      objectWithInfo,
      title
    } = this.props; //accede a todas las props que necesitamos en el componente

    const mappedNumbers = arrayOfNumber.map (multiply);

    return (
      <div>
        {title}
        <p>{mappedNumbers.join(' , ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
      )
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello 
          title="Buenasss" 
        />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        <Text 
          multiply = {(number => number * 4)}
          arrayOfNumber={[2,3,10]}
          objectWithInfo={{key: 'value', key2: 'otherValue'}}
          text="Esto es un string" 
          number={1}
          title= {<h2>Este es un titulo</h2>}  
        />
        
      </header>
    </div>
  );
}

export default App;
