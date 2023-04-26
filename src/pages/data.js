import React from "react"
import Loadable from "react-loadable"

import { plotlyConfig, plotlyLayout, plotlyProps } from '../utils/plotly'
import stuff from '../../stuff.json'

const pageStyle = {
  margin: 'auto',
  maxWidth: '600px',
}

const plotStyle = {
  margin: 'auto',
  maxWidth: '400px',
}


const DataPage = () => {

  const Plot = Loadable({
    loader: () => import('react-plotly.js'),
    loading() {
      return <div>Loading...</div>;
    },
  });

  const [city, setCity] = React.useState('Chicago')
  const [plotData, setPlotData] = React.useState({
    x: [1, 2, 3],
    y: [2, 6, 3],
  })

  const handleCityClick = () => {
    setCity(city === 'Chicago' ? 'Milwaukee' : 'Chicago')
  }

  const handleChangeDataClick = () => {
    setPlotData({
      x: [...plotData.x],
      y: plotData.y.map(y => y + 1),
    })
  }

  return (
    <main style={pageStyle}>
      <h1>Data Page</h1>
      <p>{stuff.color}</p>
      {stuff.fruits.map(x => (
        <p key={x}>{x}</p>
      ))}

      <button onClick={handleCityClick}>{city}</button>

      <div style={plotStyle}>
        <Plot
          data={[
            {
              x: plotData.x,
              y: plotData.y,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'green' },
            },
          ]}
          layout={
            {
              height: 200,
              xaxis: { fixedrange: true },
              yaxis: { fixedrange: true, tickprefix: '$' },
              ...plotlyLayout,
            }
          }
          config={plotlyConfig}
          {...plotlyProps}
        />
      </div>
      <button onClick={handleChangeDataClick}>Change Plot Data</button>

    </main>
  )
}

export default DataPage

export const Head = () => <title>Data Page</title>
