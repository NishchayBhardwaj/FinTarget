import React from "react";
import '../App.css';

const CoinSelector = ({ coins, selectedCoin, onSelect}) => {
    return (
        <select value={selectedCoin} onChange={(e) => onSelect(e.target.value)}>
            {coins.map((coin) => (
                <option key={coin.symbol} value={coin.symbol}>
                    {coin.name}
                </option>
            ))}
        </select>
    );
}

export default CoinSelector;