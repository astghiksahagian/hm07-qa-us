// eslint-disable-next-line no-undef
const config = require('../config');

//status should be 200
test('status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE'
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


//Deleting a kit using delete request
test('Deleting the kit', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		var data = await response.json();
		var ok = data.ok;
	} catch (error) {
		console.error(error);
	}
	expect(ok).toBe(true)
});

