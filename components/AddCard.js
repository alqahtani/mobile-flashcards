import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { addCardToDeck } from '../api'

export class AddCard extends Component {
  static navigationOptions = {
    title: 'Add Card',
  };

  state = {
    cardQuestion: '',
    cardAnswer: '',
  }

  handleSubmit = () => {
    const deckTitle = this.props.navigation.state.params.id
    const card = {
        question: this.state.cardQuestion,
        answer: this.state.cardAnswer,
    }
    addCardToDeck(deckTitle, card)
      .then(()=>{
        this.props.navigation.state.params.refresh()
        this.props.navigation.goBack()
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>The Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={(cardQuestion) => this.setState({cardQuestion})}
          value={this.state.cardQuestion}
          placeholder="Front side"
          underlineColorAndroid="transparent"
          returnKeyType='next'
          onSubmitEditing={() => {this.nextInput.focus()}}
        />
        
        <Text style={styles.label}>The Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(cardAnswer) => this.setState({cardAnswer})}
          value={this.state.cardAnswer}
          placeholder="Back side"
          underlineColorAndroid="transparent"
          ref={nextInput => this.nextInput = nextInput}
        />

        <KeyboardAvoidingView behavior="padding" style={styles.submitBtn}>
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.btnContent}>
              <Ionicons style={[styles.btnText, styles.btnTextIcon]} name="ios-add-circle" />
              <Text style={styles.btnText}>Add</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 40,
    marginBottom: 10,
    color: '#4A90E2',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 5,
    color: '#4A4A4A',
    marginBottom: 25,
  },
  submitBtn: {
    alignItems: 'center',
  },
  btnContent: {
    marginTop: 25,
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

export default AddCard