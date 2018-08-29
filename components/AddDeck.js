import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { getDecks, addDeck } from '../api'

export class AddDeck extends Component {
  static navigationOptions = {
    title: 'Add New Deck',
  };

  state = {
    deckTitle: ''
  }

  handleSubmit = () => {
    const { deckTitle } = this.state
    
    addDeck(deckTitle)
      .then(()=>{
        this.props.navigation.navigate('Decks')
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
          placeholder="Deck Title"
          underlineColorAndroid="transparent"
        />
        <View style={styles.submitBtn}>
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.btnContent}>
              <Ionicons style={[styles.btnText, styles.btnTextIcon]} name="ios-add-circle" />
              <Text style={styles.btnText}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  label: {
    fontSize: 40,
    marginBottom: 20,
    color: '#4A90E2',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 5,
    color: '#4A4A4A'
  },
  submitBtn: {
    alignItems: 'center',
  },
  btnContent: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 26,
    color: '#4A4A4A'
  },
  btnTextIcon: {
    marginRight: 10,
    color: '#7ED321',
  },
})

export default AddDeck