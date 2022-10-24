import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CharacterList } from './CharacterList';
import { getCharacterRequest, getCharacterSuccess, Types } from './../actions/character';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App(props) {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    props.getCharacterRequest();
    setChars(props.character.items);
  }, []);

  return (
    <div className="App">
      <Container container spacing={2}>
        <Grid>
          <header className="App-header"></header>
          <CharacterList characters={props.character.items} />- {chars.length} +{' '}
          <div>{props.character.items.length}</div>
        </Grid>
      </Container>
    </div>
  );
}

export default connect(({ character }) => ({ character }), {
  getCharacterRequest,
  getCharacterSuccess,
})(App);
