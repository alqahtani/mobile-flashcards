import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Result = ({ correct, total, backToDeck, restartQuiz }) => {
  const percent = (correct / total)*100
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}> Your score is: <Text style={{color: '#4A90E2'}}>{parseInt(percent)}%</Text> </Text>

      <View style={styles.actionBtnContainer}>
              
        <View style={{borderBottomWidth: 1, borderBottomColor: '#b1b1b2', width: 250}}>
          <TouchableOpacity onPress={() => restartQuiz()} >
            <View style={[styles.btnContent, {paddingBottom: 10, justifyContent:'center'}]}>
              <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: '#7ED321'}]} name="ios-refresh-circle" />
              <Text style={styles.btnText}>Restart Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={()=> backToDeck()}>
            <View style={[styles.btnContent, {paddingTop: 10}]}>
              <Ionicons style={[styles.btnText, styles.btnTextIcon, {color: '#50E3C2'}]} name="ios-arrow-dropleft-circle" />
              <Text style={styles.btnText}>Back to Deck</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 40,
  },
  actionBtnContainer: {
    marginTop: 60,
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

export default Result