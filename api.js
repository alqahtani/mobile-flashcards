import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'UdaciReactND:mobileFlashcards' 

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function getDeck(id) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return data[id]
    })
}

export function addDeck(deckTitle) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deckTitle]: {
      title: deckTitle,
      questions: [],
    }
  }))
}

export function addCardToDeck(deckTitle, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckTitle].questions.push(card)
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function removeDeck(id) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then((results) => {
    const data = JSON.parse(results)
    delete data[id]
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
  })
}