import { knownSingleCharacters } from './tokenize'
import snapshot from '../../../lib/snapshot.macro'

export const singleCharacter = snapshot(function tokenize(input) {
  let phase = 'Starting... โ๏ธ'
  let current = 0
  let tokens = []

  debugger

  while (current < input.length) {
    const currentChar = input[current]

    const builder = knownSingleCharacters.get(currentChar)
    if (builder) {
      const phase = 'Known Token ๐'
      debugger
      tokens.push(builder())
      debugger
      current++
    } else {
      const phase = 'Skipping... ๐งน'
      debugger
      current++
    }
  }

  phase = 'Done! โจ'
  debugger
  return tokens
})
