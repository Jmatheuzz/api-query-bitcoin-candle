import { CandleColor } from '.'

export abstract class Candle {
  low: number
  high: number
  open: number
  close: number
  color?: CandleColor
  finalDateTime?: Date
  values: number[]
  currencyTo: string

  constructor (currencyTo: string) {
    this.currencyTo = currencyTo
    this.low = Infinity
    this.high = 0
    this.close = 0
    this.open = 0
    this.values = []
  }
}

export interface CandleAdd {
  addValue: (value: number) => void
}
export interface CandleGenerateParams {
  generateParams: (value: number) => void
}
export interface CandleGenerateColor {
  generateColor: () => void
}
export interface CandleClose {
  closeCandle: () => boolean
}
export interface ToSimpleObject {
  toSimpleObject: () => Omit<Candle, 'values'>
}
