import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Result = ({ correct, total }) => {
  const percent = (correct / total)*100
  return (
    <View style={styles.container}>
      <Text> Your score is: {parseInt(percent)}% </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Result