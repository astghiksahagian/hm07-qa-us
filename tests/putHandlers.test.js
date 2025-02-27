// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"price": 175
}

//status should be 200
test('PUT test 1 checks that a price change will return a 200 status code.', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});


//Grocery item price should change
test('PUT test 2 should change the price of a grocery item', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		var data = await response.json()
		var ok = data.ok
	} catch (error) {
		console.error(error);
	}
	expect(ok).toBe(true)
});

