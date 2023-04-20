import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent id='line-chart' height='420px' primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis} width='900px' chartArea={{border: {width:0}}} 
      tooltip={{enable:true}} background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Inject services={[Legend,LineSeries, DateTime, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
