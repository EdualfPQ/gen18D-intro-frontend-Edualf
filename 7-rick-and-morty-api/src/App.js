import React from 'react';
import {Form} from '../src/components/Form'
import {ShowCharacter} from './components/character/ShowCharacter'
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  return (
    <>
      <h1>Rick&MortyAPI</h1>
      <Form/>
      <button>
        Reset
      </button>
      <ShowCharacter/>
    </>
  );
}

export default App;
