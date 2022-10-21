import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CharacterList } from './CharacterList';
import { getCharacterRequest, Types } from './../actions/character';

function App(props) {
  const [character, setCharacter] = useState([]);

  const loadCharacters = () => {
    // setCharacter(props.getCharacterRequest);
  };

  props.getCharacterRequest();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <CharacterList />
    </div>
  );
}

export default connect(({ character }) => ({ character }), {
  getCharacterRequest,
})(App);
