import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { clearLocalNotification, setLocalNotification } from '../helpers'
import Result from './Result'

const CustomHeader = ({ title, numOfQuestions, current }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
    {current <= numOfQuestions 
      ? (
        <Text style={styles.headerSubtitle}>{current} of {numOfQuestions}</Text>
      )
      : (
        <Text style={styles.headerSubtitle}>Result</Text>
      )
    }
    
  </View>
);

export class Quiz extends Component {
  state = {
    flipped: false,
    correct: 0,
    incorrect: 0,
  }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
      return {
        headerTitle: <CustomHeader title="Quiz" numOfQuestions={params.deck.questions.length} current={params.current} />,
      }
  }

  componentDidMount = () => {
    this.props.navigation.setParams({
      current: 1
    })
  }

  nextQuestion = () => {
    const { current } = this.props.navigation.state.params
    this.props.navigation.setParams({
      current: current+1
    })
  }

  handleCorrectAnswer = () => {
    this.setState(()=> ({ correct: this.state.correct+1, flipped: !this.state.flipped }))
    this.nextQuestion()
  }
  
  handleIncorrectAnswer = () => {
    this.setState(()=> ({ incorrect: this.state.incorrect+1, flipped: !this.state.flipped }))
    this.nextQuestion()
  }
  
  backToDeck = () => {
    this.props.navigation.goBack()
  }

  restartQuiz = () => {
    this.setState(()=> ({ 
      flipped: false,
      correct: 0, 
      incorrect: 0, 
    }))
    this.props.navigation.setParams({
      current: 1
    })
  }

  render() {
    const { deck, current } = this.props.navigation.state.params

    if( current > deck.questions. length ) {
      //Clear Local Notification and set new one for tomorrow
      clearLocalNotification()
      .then(setLocalNotification)

      return <Result correct={this.state.correct} total={deck.questions.length} backToDeck={this.backToDeck} restartQuiz={this.restartQuiz} />
    }
    
    if(!isNaN(current)){
      const {question, answer} = deck.questions[current-1]
      return (
        <View style={styles.container}>
        {this.state.flipped === false 
          ? (
              <View>
                <Text style={styles.questionText}>{question}</Text>
                <TouchableOpacity style={styles.flipBtn} onPress={()=> this.setState(()=> ({ flipped: true }))}>
                  <Text style={styles.flipBtnText}>See Answer</Text>
                  <Ionicons style={styles.flipBtnIcon} name="md-sync" />
                </TouchableOpacity>
              </View>
            )
          : (
              <View>
                <Text style={styles.answerText}>{answer}</Text>
                <TouchableOpacity style={[styles.flipBtn, {marginBottom: 50,}]} onPress={()=> this.setState(()=> ({ flipped: false }))}>
                  <Text style={styles.flipBtnText}>Back To Question</Text>
                  <Ionicons style={styles.flipBtnIcon} name="md-sync" />
                </TouchableOpacity>
  
                <View style={styles.actionBtnContainer}>
              
                  <View style={{borderBottomWidth: 1, borderBottomColor: '#b1b1b2', width: 250}}>
                    <TouchableOpacity onPress={this.handleCorrectAnswer} >
                      <View style={[styles.btnContent, {paddingBottom: 10, justifyContent:'center'}]}>
                        <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: '#7ED321'}]} name="md-checkmark" />
                        <Text style={styles.btnText}>Correct</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                  <View>
                    <TouchableOpacity onPress={this.handleIncorrectAnswer}>
                      <View style={[styles.btnContent, {paddingTop: 10}]}>
                        <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: 'tomato'}]} name="md-close" />
                        <Text style={styles.btnText}>Incorrect</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
  
                </View>
              </View>
            )
        }
        </View>
      )
    }
    return <Text>Loading...</Text>
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  headerSubtitle: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#4A4A4A',
    marginBottom: 200,
  },
  answerText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#4A4A4A',
    marginBottom: 100,
  },
  flipBtn: {
    alignItems: 'center',
  },
  flipBtnText: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: 20,
  },
  flipBtnIcon: {
    color: '#4A90E2',
    fontSize: 36,
  },
  actionBtnContainer: {
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
    color: '#F5A623',
  },
})

export default Quiz