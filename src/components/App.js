import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CharacterList } from './CharacterList';
import { getCharacterRequest, getCharacterSuccess, Types } from './../actions/character';

function App(props) {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    props.getCharacterRequest();
    setChars(props.character.items);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <CharacterList characters={props.character.items} />- {chars.length} + <div>{props.character.items.length}</div>
    </div>
  );
}

export default connect(({ character }) => ({ character }), {
  getCharacterRequest,
  getCharacterSuccess,
})(App);
