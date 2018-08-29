import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export class DeckItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={ () => {
            // console.log(this.props.navigation)
            this.props.navigation.navigate('Deck')
          }
        }
        style={[
          styles.card, 
          {
            backgroundColor: this.props.color, 
            marginTop: this.props.index === 0 ? 20 : 0,
          }
        ]}>
        <Text style={styles.cardTitle}> {this.props.title} </Text>
        <Text style={styles.cardNum}> {this.props.cardsNum} Cards</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 15,
    marginBottom: 20,
    height: 130,
  },
  cardTitle: {
    fontSize: 30,
    color: 'white',
  },
  cardNum: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
})
export default DeckItem