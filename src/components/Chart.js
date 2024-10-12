// Live Data Socket Code:

// import '../App.css';
// import React, { useEffect, useState, useRef } from 'react';
// import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, TimeScale } from 'chart.js';
// import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial'; // Import candlestick components
// import 'chartjs-adapter-date-fns'; // Import date adapter

// // Register the required components
// ChartJS.register(
//     Title,
//     Tooltip,
//     Legend,
//     LinearScale,
//     TimeScale,
//     CandlestickController,
//     CandlestickElement
// );

// const CandlestickChart = ({ data }) => {
//     const chartRef = useRef(null); // Create a ref for the chart
//     const [chartData, setChartData] = useState({
//         datasets: [
//             {
//                 label: 'Candlestick Chart',
//                 data: [],
//             },
//         ],
//     });

//     useEffect(() => {
//         if (!data || data.length === 0) return; // Ensure data is valid

//         // Prepare data for the candlestick chart
//         const formattedData = data.map((candle) => ({
//             x: new Date(candle[0]), // Open time
//             o: candle[1], // Open
//             h: candle[2], // High
//             l: candle[3], // Low
//             c: candle[4], // Close
//         }));

//         setChartData({
//             datasets: [
//                 {
//                     label: 'Candlestick Chart',
//                     data: formattedData,
//                 },
//             ],
//         });

//         // Create chart instance
//         const chartInstance = new ChartJS(chartRef.current, {
//             type: 'candlestick',
//             data: chartData,
//             options: {
//                 responsive: true,
//                 scales: {
//                     x: {
//                         type: 'time',
//                         time: {
//                             unit: 'minute',
//                         },
//                         title: {
//                             display: true,
//                             text: 'Time',
//                         },
//                     },
//                     y: {
//                         title: {
//                             display: true,
//                             text: 'Price',
//                         },
//                     },
//                 },
//             },
//         });

//         return () => {
//             chartInstance.destroy(); // Clean up
//         };
//     }, [data, chartData]);

//     // Only render the chart if there's valid data
//     if (!chartData.datasets[0].data.length) {
//         return <div>Loading chart...</div>; // Loading state
//     }

//     return (
//         <div className="chart-container">
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default CandlestickChart;


// Mock Data Socket Code:
import '../App.css';
import React, { useEffect, useState, useRef } from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, LinearScale, TimeScale } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import { subscribeToCandlestickData } from '../mockDataService'; // Import the mock service

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LinearScale,
    TimeScale,
    CandlestickController,
    CandlestickElement
);

const CandlestickChart = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState([]); // Store candlestick data

    useEffect(() => {
        const updateData = (newCandle) => {
            setData((prevData) => [...prevData, newCandle]); // Append new candle
        };

        subscribeToCandlestickData(updateData); // Start subscribing to mock data

        return () => clearInterval(); // Cleanup if needed
    }, []);

    useEffect(() => {
        // Check if data is available
        if (data.length === 0) return;

        const formattedData = data.map((candle) => ({
            x: new Date(candle[0]),
            o: candle[1],
            h: candle[2],
            l: candle[3],
            c: candle[4],
        }));

        const chartInstance = new ChartJS(chartRef.current, {
            type: 'candlestick',
            data: {
                datasets: [{ label: 'Candlestick Chart', data: formattedData }],
            },
            options: {
                responsive: true,
                scales: {
                    x: { type: 'time', time: { unit: 'minute' }, title: { display: true, text: 'Time' } },
                    y: { title: { display: true, text: 'Price' } },
                },
            },
        });

        return () => {
            chartInstance.destroy();
        };
    }, [data]);

    return (
        <div className="chart-container">
            <canvas ref={chartRef} />
        </div>
    );
};

export default CandlestickChart;
