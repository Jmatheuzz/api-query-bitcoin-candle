import { Candle, CandleAdd, CandleClose, CandleGenerateColor, CandleGenerateParams, ToSimpleObject } from '@/models'

export class CandleServices extends Candle implements CandleAdd, CandleClose, CandleGenerateColor, CandleGenerateParams, ToSimpleObject {
  currency: string
  constructor (currency: string, currencyTo: string) {
    super(currencyTo)
    this.currency = currency
  }

  addValue (value: number): void {
    this.values.push(value)
    this.generateParams(value)
  }

  generateParams (value: number): void {
    if (this.values.length === 1) {
      this.open = value
    }

    if (this.low > value) {
      this.low = value
    }

    if (this.high < value) {
      this.high = value
    }
  }

  generateColor (): void {
    if (this.open > this.close) {
      this.color = 'red'
    } else if (this.close > this.open) {
      this.color = 'green'
    }
  }

  closeCandle (): boolean {
    if (this.values.length > 0) {
      this.close = this.values[this.values.length - 1]
      this.finalDateTime = new Date()
      this.generateColor()
      return true
    }
    return false
  }

  toSimpleObject (): Omit<Candle, 'values'> {
    const { values, ...data } = this
    return data
  }
}
