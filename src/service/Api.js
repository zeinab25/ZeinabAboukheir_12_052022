import axios from "axios";

/**
 *Class fetches data from mock API
 */
export default class Service {
	/**
	 *
	 * @param {String} userId - user id
	 * @returns {Promise} Promise object represents user infos data
	 */
	static async getUserInfo(userId) {
		const response = await axios(`http://localhost:3000/user/${userId}`);
		return response.data.data;
	}

	/**
	 *
	 * @param {String} userId -user id
	 * @returns {Promise} Promise object represents user activity data
	 */
	static async getUserActivity(userId) {
		const response = await axios(`http://localhost:3000/user/${userId}/activity`);
		return response.data.data;
	}

	/**
	 *
	 * @param {String} userId -user id
	 * @returns {Promise} Promise object represents user average session data
	 */
	static async getUserAverageSession(userId) {
		const response = await axios(`http://localhost:3000/user/${userId}/average-sessions`);
		return response.data.data;
	}

	/**
	 *
	 * @param {String} userId -user id
	 * @returns {Promise} Promise object represents user performance data
	 */
	static async getUserPerformance(userId) {
		const response = await axios(`http://localhost:3000/user/${userId}/performance`);
		return response.data.data;
	}
}
