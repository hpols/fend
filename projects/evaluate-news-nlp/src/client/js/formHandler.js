/* Global Variables */
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const apiHolder = '?key=';
const queryHolder = '&of=json&txt='
const langHolder= '&lang=en';

function handleSubmit(event) {
    event.preventDefault()

    // get input from form field
    let formText = document.getElementById('name').value
	//get api
	getKey('/getApi')
	.then( async function(data) { 
		const request = await fetch(baseUrl + apiHolder + data.key + queryHolder + formText + langHolder)
		try {
			const receivedData = await request.json();
			console.log(receivedData);
			return receivedData;
		} catch (error) {
			console.log('error', error);
		}
	}) 
	.then(function (res) {
		document.getElementById('results').innerHTML = res.message
	})
	
//    console.log("::: Form Submitted :::")
//    fetch('http://localhost:8080/test')
//    .then(res => res.json())
//    .then(function(res) {
//        document.getElementById('results').innerHTML = res.message
//    })
}

async function getKey(server) {
	const request = await fetch(server, {
		method: 'GET',
		credentials: 'same-origin',
		//headers: 'Content-Type': 'application/json'
	});
	try {
		const data = await response.json();
		console.log("Api key has been retrieved");
		return data;
	} catch (error) {
		console.log('error', error);
	}
}

export { handleSubmit }