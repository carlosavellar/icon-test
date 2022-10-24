import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { CharacterList } from './CharacterList';
import { getCharacterRequest, getCharacterSuccess, Types } from './../actions/character';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import imgHeader from './../assets/images/header.jpg';
import SearchForm from './SearchForm';

function App(props) {
  const [chars, setChars] = useState([]);

  const loadChars = () => {
    props.getCharacterRequest();
    setChars((prevState) => ({ prevState: props.character.items }));
    console.log(chars, 'chars');
  };

  useEffect(() => {
    loadChars();
    console.log(chars, 'chars');
  }, []);

  const handlerFilterCharacter = (text) => {
    const searchedChars = props.character.items.filter(({ name }) => {
      console.log(text, name.toLowerCase().includes(text.toLowerCase()));
      return name.toLowerCase().includes(text.toLowerCase());
    });
    setChars(searchedChars);
  };

  return (
    <div className="App">
      <Container container spacing={2}>
        <Grid>
          <header className="App-header">
            <img src={imgHeader} />
          </header>
          <Grid container rowSpacing={1} component="div">
            <SearchForm container onSearchChar={handlerFilterCharacter} />
          </Grid>
          <CharacterList characters={props.character.items} />
        </Grid>
      </Container>
    </div>
  );
}

export default connect(({ character }) => ({ character }), {
  getCharacterRequest,
  getCharacterSuccess,
})(App);
