const CryptoJS = require('crypto-js');
const request = require('request');
const Promise = require('promise');

var auth_uri = 'https://authservice.priaid.ch/login';
let secret_key = "c8BYn56RbWy2x7T4P" //100 calls only
let api_key = "w4H5S_STUDENT_MONASH_EDU_AUT"

//function to get hashed string 
const genHashString = () => {
		const hash = CryptoJS.HmacMD5(auth_uri,secret_key)
		const hashString = hash.toString(CryptoJS.enc.Base64);
		return hashString;
}

export const getToken = () => {
	return new Promise((resolve, reject) => {
		let hashString = genHashString();
		var options = {
			method:'POST',
			url:auth_uri,
			headers:{
				'Authorization':`Bearer ${api_key}:${hashString}`
			}
		}

		//send request to server to get token
		request(options,(error,response,body)=>{
			if(error)
				reject(error);
			else{
				var newBody = JSON.parse(response.body);
				resolve(newBody.Token);
			}
		});
	});
}	


// const baseUrl = "https://healthservice.priaid.ch"
// const getDiagosisUrl = async (symptoms, gender, age)=> { 
// }

// // async function fetchDiagosis(symptoms, gender, age) {
// //     let result = ""
// //     await fetch(getDiagosisUrl(symptoms, gender, age))
// //         .then(response => response.json())
// //         .then(data => result = data);
// //     return result
// // }

// export const fetchDiagosis = async (symptoms, gender, age) => {
//     getToken().then(e => {
//         console.log(e)
//         let url = baseUrl + "/diagnosis?symptoms=[" + symptoms + "]&gender=" + gender.toLowerCase() + "&year_of_birth=" + age + "&token=" + e + "&format=json&language=en-gb"
//         // console.log(url)
//         fetch(url)
//         .then(response => {
//             // console.log(response)
//             return response.json()
//         })
//         .then(data => {
//             console.log(data); 
//             return data
//         });
//     })
//     // console.log(url)
// };