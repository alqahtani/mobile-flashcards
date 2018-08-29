import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { getDeck, removeDeck } from '../api'

export class Deck extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0,
    },
  };

  state = {
    deck: null,
  }

  componentDidMount = () => {
    const { title } = this.props.navigation.state.params
    getDeck(title).then( result => {
      this.setState(()=> ({ deck: result }))
    })
  }

  handleAddCard = () => {
    this.props.navigation.navigate('AddCard', {id: this.state.deck.title, refresh: this.refresh})
  }

  refresh = () => {
    const { title } = this.props.navigation.state.params
    getDeck(title).then( result => {
      this.setState(()=> ({ deck: result }))
    })
  }

  handleStartQuiz = () => {
    this.props.navigation.navigate('Quiz', { deck: this.state.deck })
  }

  handleRemoveDeck = () => {
    removeDeck(this.state.deck.title)
      .then(() => {
        this.props.navigation.navigate('Decks')
      })
  }

  render() {
    const { color } = this.props.navigation.state.params
    const { deck } = this.state

    return (
      <View style={styles.container}>
      {deck === null 
        ? <Text>Loading...</Text>
        : (
          <SafeAreaView style={styles.container}>
      
            <View style={[styles.titleContainer, {backgroundColor: color}]}>
              <Text style={styles.cardTitle}>{deck.title}</Text>
              <Text style={styles.cardNum}> {deck.questions.length} Cards</Text>
            </View>
            
            <View style={styles.actionContainer}>
              
              <View style={styles.actionBtnContainer}>
                
                <View style={{borderBottomWidth: 1, borderBottomColor: '#b1b1b2', width: 250}}>
                  <TouchableOpacity onPress={this.handleAddCard} >
                    <View style={[styles.btnContent, {paddingBottom: 10, justifyContent:'center'}]}>
                      <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: '#7ED321'}]} name="ios-add-circle" />
                      <Text style={styles.btnText}>Add Card</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity onPress={this.handleStartQuiz}>
                    <View style={[styles.btnContent, {paddingTop: 10}]}>
                      <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: '#4A90E2'}]} name="ios-school" />
                      <Text style={styles.btnText}>Start Quiz</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
              
              <View style={styles.addNewDeckContainer}>
                <TouchableOpacity onPress={() => this.handleRemoveDeck()}>
                  <View style={styles.btnContent}>
                    <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: 'tomato'}]} name="md-close-circle" />
                    <Text style={styles.btnText}>Remove Deck</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
            
          </SafeAreaView>
        )
      }
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50E3C2',
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 50,
    color: 'white',
  },
  cardNum: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)',
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
    color: '#F5A623',
  },
})

export default Deck