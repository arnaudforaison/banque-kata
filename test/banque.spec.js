import { Compte } from '../src/banque'
import { captureStream } from './helper'
import { assert } from 'chai'

describe('Sur mon compte bancaire', () => {

  let hook
  beforeEach(function () {
    hook = captureStream(process.stdout)
  })

  it(`j'imprime un relevé`, () => {
    // Given
    const monCompte = new Compte()

    // When
    monCompte.imprimerReleve()

    // Then
    assert.strictEqual(hook.captured(), 'Date || Debit || Balance')
    hook.destroy()
  })
})