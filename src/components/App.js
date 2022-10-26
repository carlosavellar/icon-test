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

  useState(() => {
    props.getCharacterRequest();
  }, []);

  const loadChars = () => {
    setChars(props.character.items);
  };

  const logChars = () => {
    // debugger;
  };

  console.log(chars, 'chars');
  useEffect(() => {
    loadChars();
    setChars(props.character.items);
    logChars();
  }, []);

  const handlerFilterCharacter = (text) => {
    let loadChars = [];
    props.character.items.filter((item) => {
      // console.log(text, name.toLowerCase().includes(text.toLowerCase()));
      if (item.name.toLowerCase().includes(text.toLowerCase())) {
        loadChars.push(item);
      }
    });
    setChars(loadChars);
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
          <CharacterList characters={chars} />
        </Grid>
      </Container>
    </div>
  );
}

export default connect(({ character }) => ({ character }), {
  getCharacterRequest,
  getCharacterSuccess,
})(App);
