import Service from "./service/Api";
import MockService from "./service/Mock";

const activeService = process.env.REACT_APP_MOCK_ACTIVE === "true" ? MockService : Service;

/**
 * Class fetches information data model
 */

export default class Model {
	/**
	 *
	 * @param {String} userId
	 * @returns {Promise} - object represents user name and id
	 */
	static async getUserNameModel(userId) {
		const { userInfos, id } = await activeService.getUserInfo(userId);
		const { firstName } = userInfos;
		return { firstName, id };
	}

	/**
	 *
	 * @param {String} userId
	 * @returns {Promise} - user score
	 */
	static async getUserScoreModel(userId) {
		const { score, todayScore } = await activeService.getUserInfo(userId);
		return { score: score || todayScore };
	}

	/**
	 *
	 * @param {String} userId
	 * @returns {Promise} - user nutrition
	 */
	static async getUserNutritionalModel(userId) {
		const { keyData } = await activeService.getUserInfo(userId);
		const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData;
		return { calorieCount, proteinCount, carbohydrateCount, lipidCount };
	}

	/**
	 *
	 * @param {String} userId
	 * @returns {Promise} - user activity session array
	 */
	static async getUserActivityModel(userId) {
		const { sessions } = await activeService.getUserActivity(userId);
		return { sessions };
	}

	/**
	 *
	 * @param {String} userId
	 * @returns {Promise} - user average session array
	 */
	static async getUserAverageSessionModel(userId) {
		const { sessions } = await activeService.getUserAverageSession(userId);
		return { sessions };
	}

	/**
	 *
	 * @param {String} userId
	 * @returns {Promise} - user performance data array
	 */
	static async getUserPerformanceModel(userId) {
		const { data } = await activeService.getUserPerformance(userId);
		return { data };
	}
}
