import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'react-google-charts'
import './Graph.css';

const LineData = [
  ['x', 'dogs'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
//   [4, 18, 10],
//   [5, 9, 5],
//   [6, 11, 3],
//   [7, 27, 19],
]
const LineChartOptions = {
//   hAxis: {
//     title: 'Time',
//   },
//   vAxis: {
//     title: 'Popularity',
//   },
//   series: {
//     1: { curveType: 'function' },
//   },
}
// import './App.css';

function Graph() {
 
      
  return (
    <div className="Graph">
           <div>
        {/* <Line
        //   options={options}
          data={state}
        //   style={{vh:50}}
          datasetIdKey="id"
        /> */}
           <Chart
          width={'200px'}
          height={'110px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
        //   rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
}

export default Graph;
