import React, { useState, useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphDisplay = props => {
	console.log('props inside graph' , props.stockData);
  useEffect(()=>{
		let dataPoints = [];
		if(props.data.changes){
			for(let i = 0; i < props.data.changes.length; i+=100){
				dataPoints.push({x : i , y: Object.values(props.data.changes[i])[0]})
			}
		}
		console.log('datapoints', dataPoints);
    var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark1", // "light1", "dark1", "dark2"
			title:{
				text: "Stock info"
			},
			axisY: {
				title: "Price",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: ${y}",
				dataPoints: dataPoints
			}]
    })
    chart.render();
  }, []);

  return (  
    <div id="chartContainer" style={{height: 360 + "px", width: 48 + "%", position: "absolute", left: "10px"}}></div>
  );
};

export default GraphDisplay;
