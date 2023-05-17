import CoinGecko from 'coingecko-api';

const api = new CoinGecko();

// Fetching market prices
api.coins.markets({ vs_currency: 'usd', ids: ['bitcoin', 'ethereum', 'solana', 'xrp', 'litecoin'] })
    .then((response) => {
        const { data } = response;
        data.forEach((coin) => {
            console.log(`Symbol: ${coin.symbol}`);
            console.log(`Current Price: ${coin.current_price}`);
            console.log(`Market Cap: ${coin.market_cap}`);
        });
    })
    .catch((error) => {
        console.error('Error fetching market prices:', error);
    });

// Fetching exchange rates
api.simple.supportedVsCurrencies()
    .then((response) => {
        const { data } = response;
        console.log('Supported Currencies:', data);
    })
    .catch((error) => {
        console.error('Error fetching supported currencies:', error);
    });