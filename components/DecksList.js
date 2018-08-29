import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { data, colors } from '../_DATA'
import DeckItem from './DeckItem'

export class DecksList extends Component {
  static navigationOptions = {
    title: 'Decks List',
  };

  handleAddNewDeck = () => {
    alert('Add New Deck Clicked!')
  }

  render() {
    const decks = Object.keys(data)
    return (
      <View style={styles.container}>

        <View style={styles.decksListContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {decks.map((deck, index) => {
              return (
                <DeckItem 
                  key={deck} 
                  title={data[deck].title} 
                  cardsNum={data[deck].questions.length} 
                  color={colors[index]} 
                  index={index}
                  navigation={this.props.navigation} 
                />
              );
            })}
        </ScrollView>
          </View>

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
    // paddingTop: 10,
  },
  addNewDeckContainer: {
    height: 95,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'tomato',
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