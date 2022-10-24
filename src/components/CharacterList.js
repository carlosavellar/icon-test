import React from 'react';
import { CharacterListItem } from './CharacterListItem';

export const CharacterList = (props) => {
  return (
    <div>
      {console.log(props.characters, 'CharactersList')}
      {props.characters.map((item, index) => {
        return <CharacterListItem charItem={item} key={index} />;
      })}
    </div>
  );
};
