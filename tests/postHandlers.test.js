// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"deliveryTime": 9,
		"productsCount": 10,
		"productsWeight": 11
}

// status should be 200
test('status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status
	} 
	catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});


// check that speedy delivery cost is greater than or equal to 0.
test('check that speedy delivery cost is greater than or equal to 0', async () => {
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		var data = await response.json()
		var clientDeliveryCost = data.clientDeliveryCost; 
	} 
	catch (error) {
		console.error(error);
	}
	expect(clientDeliveryCost).toBeGreaterThanOrEqual(0)
});
