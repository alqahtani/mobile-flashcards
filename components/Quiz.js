import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const CustomHeader = ({ title, subtitle }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
    <Text style={styles.headerSubtitle}>{subtitle}</Text>
  </View>
);

export class Quiz extends Component {
  static navigationOptions = {
    headerTitle: <CustomHeader title="Quiz" subtitle="1 of 2" />,
  };

  state = {
    flipped: false,
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.flipped === false 
        ? (
            <View>
              <Text style={styles.questionText}>Does React Native Work with Android?</Text>
              <TouchableOpacity style={styles.flipBtn} onPress={()=> this.setState(()=> ({ flipped: true }))}>
                <Text style={styles.flipBtnText}>See Answer</Text>
                <Ionicons style={styles.flipBtnIcon} name="md-sync" />
              </TouchableOpacity>
            </View>
          )
        : (
            <View>
              <Text style={styles.answerText}>Yes!</Text>
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