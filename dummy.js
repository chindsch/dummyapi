const axios = require('axios')
const url = "https://dummpyapi.io/data/api/user"

const config = {
	headers: {
		'app-id': '5f7a04574834dc03a635b889'
	} 
}

axios.get(url, config).then(resp => {
	names = resp.data.data	
	for (const name in names) {
	  console.log(names[name].email)
});
