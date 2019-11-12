import React, { useState, useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphDisplay = props => {
	console.log('props inside graph' , props.stockData);
	
  useEffect(()=>{
		let dataSets = [];
		if(props.data.changes){
			for(let i = props.data.changes.length - 1, j = 0; i >= 0; i-=100, j++){
				dataSets.push({x : j , y: Number(Object.values(props.data.changes[i])[0])});
			}
		}
		console.log('datapoints', dataSets);
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
				dataPoints: dataSets
			}]
    })
    chart.render();
  }, []);

  return (  
    <div id="chartContainer" style={{height: 360 + "px", width: 48 + "%", position: "absolute", left: "10px"}}></div>
  );
};

export default GraphDisplay;
