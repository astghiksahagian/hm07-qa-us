// eslint-disable-next-line no-undef
const config = require('../config');

//Couriers - Get a list of delivery types
test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
	} 
	catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});


//Checking that number of delivery types is greater than 0
test("check that number of delivery types is greater than 0", async () => {
	let response;
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	}
	catch (error) {
		console.error(error);
	}
	// Convert response to JavaScript object
	var data = await response.json();
	var deliveryTypeCount = data.length;

	expect(deliveryTypeCount).toBeGreaterThan(0);
}); 


