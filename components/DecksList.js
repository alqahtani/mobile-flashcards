import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import DeckItem from './DeckItem'
import { getDecks } from '../api'
import { colors } from '../_DATA'

export class DecksList extends Component {
  static navigationOptions = {
    title: 'Decks List',
  }

  state = {
    decks: {}
  }

  componentDidMount = () => {
    getDecks().then( result => {
      this.setState(()=> ({ decks: JSON.parse(result) }))
    })
  }

  componentDidUpdate = () => {
    getDecks().then( result => {
      this.setState(()=> ({ decks: JSON.parse(result) }))
    })
  }
  

  render() {
    const { decks } = this.state
    const decksIds = typeof decks === 'object' ? Object.keys(decks).sort() : []
    
    return (
      <View style={styles.container}>

        {decksIds.length > 0 
          ? ( 
              <View style={styles.decksListContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {decksIds.map((deckId, index) => {
                    return (
                      <DeckItem 
                        key={deckId} 
                        title={decks[deckId].title} 
                        cardsNum={decks[deckId].questions.length} 
                        color={colors[index]} 
                        index={index}
                        navigation={this.props.navigation} 
                      />
                    );
                  })}
                </ScrollView>
              </View>
            )
          : (
            <View style={styles.noDecksContainer}>
            <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: '#f1c40f', fontSize: 100}]} name="md-information-circle" />
            <Text style={{color: '#95a5a6', fontSize:20}}>No Decks yet?</Text>
            <Text style={{color: '#95a5a6', fontSize:20}}>Try to add new one!</Text>
            </View>
        )}

        <SafeAreaView style={styles.addNewDeckContainer}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('AddDeck')}>
            <View style={styles.btnContent}>
              <Ionicons style={[styles.btnText, styles.btnTextIcon]} name="ios-add-circle" />
              <Text style={styles.btnText}>Add New Deck</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  decksListContainer: {
    flex:1,
    paddingRight: 30,
    paddingLeft: 30,
  },
  noDecksContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewDeckContainer: {
    height: 95,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContent: {
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 34,
    color: '#4A4A4A'
  },
  btnTextIcon: {
    marginRight: 10,
    color: '#7ED321',
  },
});

export default DecksList