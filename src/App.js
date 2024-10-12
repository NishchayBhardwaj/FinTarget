// import React, { useState, useEffect } from 'react';
// import MarketData from './components/MarketData';
// import CandleStickChart from './components/Chart';

// const App = () => {
//     const [selectedCoin, setSelectedCoin] = useState('ethusdt');
//     const [selectedInterval, setSelectedInterval] = useState('1m');
//     const [candleData, setCandleData] = useState([]);

//     const handleDataUpdate = (newCandle) => {
//         setCandleData((prevData) => [...prevData, newCandle]);
//     };

//     const handleCoinChange = (event) => {
//         setSelectedCoin(event.target.value);
//         setCandleData([]);
//     };

//     const handleIntervalChange = (event) => {
//         setSelectedInterval(event.target.value);
//         setCandleData([]);
//     };

//     return (
//         <div>
//             <h1>Cryptocurrency Candlestick Chart</h1>
//             <label>
//                 Select Coin:
//                 <select onChange={handleCoinChange} value={selectedCoin}>
//                   <option value="ethusdt">ETH/USDT</option>
//                   <option value="bnbusdt">BNB/USDT</option>
//                   <option value="dotusdt">DOT/USDT</option>
//                 </select>
//             </label>
//             <label>
//                 Select Interval:
//                 <select onChange={handleCoinChange} value={selectedInterval}>
//                   <option value="1m">1 Minute</option>
//                   <option value="3m">3 Minutes</option>
//                   <option value="5m">5 Minutes</option>
//                 </select>
//             </label>
//             <MarketData selectedCoin={selectedCoin} selectedInterval={selectedInterval} onDataUpdate={handleDataUpdate} />
//             <CandleStickChart data={candleData} />
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react';
import MarketData from './components/MarketData';
import CandleStickChart from './components/Chart';
import { FormControl, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';

const App = () => {
    const [selectedCoin, setSelectedCoin] = useState('ethusdt');
    const [selectedInterval, setSelectedInterval] = useState('1m');
    const [candleData, setCandleData] = useState([]);

    const handleDataUpdate = (newCandle) => {
        setCandleData((prevData) => [...prevData, newCandle]);
    };

    const handleCoinChange = (event) => {
        setSelectedCoin(event.target.value);
        setCandleData([]);
    };

    const handleIntervalChange = (event) => {
        setSelectedInterval(event.target.value);
        setCandleData([]);
    };

    return (
        <Box
            sx={{
              backgroundColor: '#000',
              borderRadius: '16px',
              padding: '40px',
              maxWidth: '800px',
              margin: '40px auto',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02',
              },
            }}
        >
            <Typography
                variant="h3"
                sx={{
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  letterSpacing: '0.1em',
                  marginBottom: '30px',
                  textShadow: '2px 2px 8px rgba(255, 255, 255, 0.3)',
                }}
            >
              Cryptocurrency Candlestick Chart
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '20px',
                marginBottom: '20px',
              }}
            >

              <FormControl variant='outlined' sx={{ minWidth: 200 }}>
                <InputLabel sx={{ color: '#fff' }}>Select Coin</InputLabel>
                <Select
                    value={selectedCoin}
                    onChange={handleCoinChange}
                    label="Select Coin"
                    sx={{ color: '#fff', borderColor: '#fff' }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                            bgcolor: '#000', // Background color for the dropdown
                            color: '#fff',   // Text color inside dropdown
                          },
                      },
                    }}
                >
                  <MenuItem value="ethusdt">ETH/USDT</MenuItem>
                  <MenuItem value="bnbusdt">BNB/USDT</MenuItem>
                  <MenuItem value="dotusdt">DOT/USDT</MenuItem> 
                </Select>
              </FormControl>
                
              <FormControl variant='outlined' sx={{ minWidth: 200 }}>
                <InputLabel sx={{ color: '#fff' }}>Select Interval</InputLabel>
                <Select
                    value={selectedInterval}
                    onChange={handleIntervalChange}
                    label="Select Interval"
                    sx={{ color: '#fff', borderColor: '#fff' }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                            bgcolor: '#000', // Background color for the dropdown
                            color: '#fff',   // Text color inside dropdown
                          },
                      },
                    }}
                >
                  <MenuItem value="1m">1 Minute</MenuItem>
                  <MenuItem value="3m">3 Minutes</MenuItem>
                  <MenuItem value="5m">5 Minutes</MenuItem> 
                </Select>
              </FormControl>
            </Box>
            
            <MarketData selectedCoin={selectedCoin} selectedInterval={selectedInterval} onDataUpdate={handleDataUpdate} />
            <CandleStickChart data={candleData} />
        </Box>
    );
};

export default App;