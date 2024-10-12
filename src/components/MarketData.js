import { useEffect } from "react";

const MarketData = ({ selectedCoin, selectedInterval, onDataUpdate }) => {

    useEffect(() => {
        const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${selectedCoin}@kline_${selectedInterval}`)

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            const candleData = message.k;
            if(candleData) {
                onDataUpdate(candleData);
            }
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return() => {
            socket.close();
        };
    }, [selectedCoin, selectedInterval, onDataUpdate]);

    return null;
};

export default MarketData;