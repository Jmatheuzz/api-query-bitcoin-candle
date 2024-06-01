import { CandleColor } from '.'

export type Candle = {
  id: number
  low: number
  high: number
  open: number
  close: number
  color?: CandleColor
  finalDateTime?: Date
}
