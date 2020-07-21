import axios from 'axios';
//import store from '../store/';

export class BaseService {
  
  api = process.env.NODE_ENV == "production"? 'https://api.yourprofile.global' : 'http://localhost:5000/api';// process.env.VUE_APP_API;
	_get(url) {
		//const authState = store.state.auth;
		return new Promise((resolve, reject) => {
			const headers = {
				'Content-Type': 'application/json'
			}
			// if (authState.isAuthenticated) {
			// 	headers['Authorization'] = `Bearer ${authState.user.access_token}`
			// }
			axios.get(`${this.api}${url}`, {
				crossDomain: true,
				headers
			}).then(function (response) {
				resolve(response.data);
			})
				.catch(function (error) {
				console.log(error)
					reject(error);
				});
		});
	}
	_post(url, data) {
		// const authState = store.state.auth;
		return new Promise((resolve, reject) => {
			const headers = {
				'Content-Type': 'application/json'
			}
			// if (authState.isAuthenticated) {
			// 	headers['Authorization'] = `Bearer ${authState.user.access_token}`
			// }

			axios.post(`${this.api}${url}`, data, {
				crossDomain: true,
				headers
			}).then(function (response) {
				resolve(response.data);
			})
				.catch(function (error) {
					reject(error);
				});
		});
	}

	_put(url, data) {
		//const authState = store.state.auth;
		return new Promise((resolve, reject) => {
			const headers = {
				'Content-Type': 'application/json'
			}
			// if (authState.isAuthenticated) {
			// 	headers['Authorization'] = `Bearer ${authState.user.access_token}`
			// }
			axios.put(`${this.api}${url}`, data, {
				crossDomain: true,
				headers
			}).then(function (response) {
				resolve(response.data);
			})
				.catch(function (error) {
					reject(error);
				});
		});
	}

	_delete(url, data) {
		//const authState = store.state.auth;
		return new Promise((resolve, reject) => {
			const headers = {
				'Content-Type': 'application/json'
			}
			// if (authState.isAuthenticated) {
			// 	headers['Authorization'] = `Bearer ${authState.user.access_token}`
			// }
			axios.delete(`${this.api}${url}`, data, {
				crossDomain: true,
				headers
			}).then(function (response) {
				resolve(response.data);
			})
				.catch(function (error) {
					reject(error);
				});
		});
	}
	// _post(url, data) {
  //   const authState = store.state.auth;
	// 	return new Promise((resolve, reject) => {
  //     const headers = {
  //       'Content-Type': 'application/json'
  //     }
  //     if(authState.isAuthenticated){
  //       headers['Authorization'] = `Bearer ${authState.user.access_token}`
	// 		}
	// 		axios.post(`${this.api}${url}`, data, {
	// 			crossDomain: true,
	// 			headers
	// 		}).then(function(response) {
	// 			resolve(response.data);
	// 		})
	// 			.catch(function(error) {
	// 				console.log(error)
	// 				reject(error);
	// 			});
	// 	});
	// }
}