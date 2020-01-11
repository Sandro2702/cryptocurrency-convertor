class CryptoAPI {
	// Query the rest api with a currency and a cryptocurrency

	async queryAPI (currency, cryptocurrency) {
		// Query the URL
		const url = await fetch(
			`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`
		);

		// Return as json
		const result = await url.json();

		// Return the object
		return {
			result
		};
	}

	// Get all the cryptocurrencies
	async getCryptoCurrenciesList () {
		const url = await fetch(
			'https://api.coinmarketcap.com/v1/ticker/'
		);

		// Return received data as JSON
		const cryptoCurrencies = await url.json();

		// Return the object
		return {
			cryptoCurrencies
		};
	}
}
