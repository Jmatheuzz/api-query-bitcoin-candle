import './config/module-alias'
import 'dotenv/config'
import { generateCandle } from '@/services'

void (async function start () {
  await generateCandle()
})()
