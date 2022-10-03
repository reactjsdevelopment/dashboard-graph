import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'react-google-charts'
import './Graph.css';

const LineData = [
  ['x', 'd'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
//   [4, 18, 10],
//   [5, 9, 5],
//   [6, 11, 3],
//   [7, 27, 19],
]


function Graph() {
 
      
  return (
    <div className="Graph">
           <div>
           <Chart
          width={'200px'}
          height={'110px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
        />
      </div>
    </div>
  );
}

export default Graph;
