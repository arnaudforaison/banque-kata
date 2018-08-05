import { Compte } from '../src/banque'
import { assert } from 'chai'

describe('Sur mon compte bancaire', () => {

  it(`j'imprime un relevé`, () => {
    // Given
    const monCompte = new Compte()

    // When
    monCompte.imprimerReleve()

    // Then
    assert.isTrue(true)
  })
})
