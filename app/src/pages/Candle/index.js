import React, { useEffect, useState, useCallback } from 'react';
import Chart from "react-apexcharts";
import axios from '../../api';
import io from 'socket.io-client'


export default function Candle() {
  const [candles, setCandles] = useState([])
  const socket = io(process.env.REACT_APP_SOCKET_SERVER)

  const getData= useCallback(
    async () => {
      const {data} = await axios.get('candles')
      setCandles(data)
      
    }, []
  )
  useEffect(() => {
    getData()
    socket.on(process.env.REACT_APP_SOCKET_EVENT_NAME, (candles) => {
      setCandles(candles)
      console.log('socket event')
    })
  }, [getData]);
  const options = {
    title: {
      text: 'LATEST BITCOIN DOLLAR PRICES',
      align: 'center'
  },
  xaxis: {
      type: 'datetime'
  },
  yaxis: {
    labels: {
      formatter: function (y) {
        return 'US$ ' + (y).toLocaleString('en');
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (y) {
            return 'US$ ' + (y).toLocaleString('en');
          }
        }
      },
      
    }
  }
}
console.log(candles)
  const data = candles.map(candle => ({
    x: `${new Date(new Date(candle.finalDateTime).getTime() - 3*60*60*1000)}`,
    y: [candle.open, candle.high, candle.low, candle.close]
  }))
  

  const series = [{
    data
  }];
  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <Chart
              options={options}
              series={series}
              type="candlestick"
              width="800"
            />
    </div>
  )
}