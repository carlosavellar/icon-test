import React from 'react';
import { CharacterListItem } from './CharacterListItem';

export const CharacterList = (props) => {
  return (
    <div>
      <ul>
        {console.log(props.characters, 'CharactersList')}
        {props.characters.map((item, index) => {
          return <CharacterListItem charItem={item} key={index} />;
        })}
      </ul>
    </div>
  );
};
