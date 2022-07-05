import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ActivityChart from "../../components/Charts/Activity";
import PerformanceChart from "../../components/Charts/Performance";
import AverageChart from "../../components/Charts/Average";
import ScoreChart from "../../components/Charts/Score";
import NutritioanlSideBar from "../../components/NutritionalSideBar/NutritionalSideBar";
import Model from "../../model";

export default function Dashboard({}) {
	let { id } = useParams();
	let navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [userName, setUserName] = useState({});
	const [userScore, setUserScore] = useState({});
	const [userNutritional, setUserNutritional] = useState({});
	const [userActivity, setUserActivity] = useState({});
	const [userAverageSession, setUserAverageSession] = useState({});
	const [userPerformance, setUserPerformance] = useState({ data: [] });

	useEffect(() => {
		const getUserData = async () => {
			setIsLoading(true);
			try {
				const userNamePromise = Model.getUserNameModel(id);

				const userScorePromise = Model.getUserScoreModel(id);

				const userNutritionalPromise = Model.getUserNutritionalModel(id);

				const userActivityPromise = Model.getUserActivityModel(id);

				const userAverageSessionPromise = Model.getUserAverageSessionModel(id);

				const userPerformancePromise = Model.getUserPerformanceModel(id);
				const [
					userNameData,
					userScoreData,
					userNutritionalData,
					userActivityData,
					userAverageSessionData,
					userPerformanceData,
				] = await Promise.all([
					userNamePromise,
					userScorePromise,
					userNutritionalPromise,
					userActivityPromise,
					userAverageSessionPromise,
					userPerformancePromise,
				]);
				setUserName(userNameData);
				setUserScore(userScoreData);
				setUserNutritional(userNutritionalData);
				setUserActivity(userActivityData);
				setUserAverageSession(userAverageSessionData);
				setUserPerformance(userPerformanceData);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				navigate("/404");
				setIsLoading(false);
			}
		};

		getUserData();
	}, [id]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<h1 className={styles.title}>
				Bonjour
				<span> {userName.firstName}</span>
			</h1>
			<p className={styles.para}>
				Félicitation ! Vous avez explosé vos objectifs hier &#128079;
			</p>
			<div className={styles.container}>
				<div className={styles.charts}>
					<ActivityChart data={userActivity.sessions} />
					<div>
						<AverageChart data={userAverageSession.sessions} />
						<PerformanceChart data={userPerformance.data} />
						<ScoreChart data={userScore.score} />
					</div>
				</div>
				<div className={styles.nutritioanlSideBar}>
					<NutritioanlSideBar
						calorieCount={userNutritional.calorieCount}
						proteinCount={userNutritional.proteinCount}
						lipidCount={userNutritional.lipidCount}
						carbohydrateCount={userNutritional.carbohydrateCount}
					/>
				</div>
			</div>
		</>
	);
}
