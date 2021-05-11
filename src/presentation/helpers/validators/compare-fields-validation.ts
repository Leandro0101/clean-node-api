import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldname: string,
    private readonly fieldToComparename: string
  ) { }

  validate (input: any): Error {
    if (input[this.fieldname] !== input[this.fieldToComparename]) {
      return new InvalidParamError(this.fieldToComparename)
    }
  }
}
