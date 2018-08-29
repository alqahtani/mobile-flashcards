import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export class Deck extends Component {
  static navigationOptions = {
    header: null,
  };

  handleBackToDecksList = () => {
    this.props.navigation.navigate('Decks')
  }

  handleStartQuiz = () => {
    this.props.navigation.navigate('Quiz')
  }
  
  handleAddCard = () => {
    this.props.navigation.navigate('AddCard')
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
      
        <View style={styles.titleContainer}>
          <Text style={styles.cardTitle}>JavaScript</Text>
          <Text style={styles.cardNum}> 2 Cards</Text>
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
            <TouchableOpacity onPress={this.handleBackToDecksList}>
              <View style={styles.btnContent}>
                <Ionicons style={[styles.btnText, styles.btnTextIcon]} name="ios-arrow-dropleft-circle" />
                <Text style={styles.btnText}>Back To All Decks</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        
      </SafeAreaView>
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