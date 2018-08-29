import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DecksList from './components/DecksList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'

const Stack = createStackNavigator(
  {
    Decks: DecksList,
    Deck: Deck,
    Quiz: Quiz,
    AddDeck: AddDeck,
    AddCard: AddCard,
  },
  {
    initialRouteName: 'Decks',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}
