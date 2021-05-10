import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  private readonly fieldname: string
  private readonly fieldToComparename: string
  constructor (fieldname: string, fieldToComparename: string) {
    this.fieldname = fieldname
    this.fieldToComparename = fieldToComparename
  }

  validate (input: any): Error {
    if (input[this.fieldname] !== input[this.fieldToComparename]) {
      return new InvalidParamError(this.fieldToComparename)
    }
  }
}
