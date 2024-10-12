// src/mockDataService.js
const mockCandleData = () => {
    const now = Date.now();
    const open = Math.random() * 100 + 50; // Random open price between 50 and 150
    const close = open + (Math.random() - 0.5) * 10; // Close price within 5 units of open
    const high = Math.max(open, close) + Math.random() * 5; // Random high price
    const low = Math.min(open, close) - Math.random() * 5; // Random low price
    return [now, open, high, low, close];
};

const subscribeToCandlestickData = (callback) => {
    setInterval(() => {
        callback(mockCandleData());
    }, 1000); // Update every second
};

export { subscribeToCandlestickData };
