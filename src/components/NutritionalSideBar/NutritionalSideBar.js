import React from "react";
import styles from "./nutritionalSideBar.module.css";
import calories from "./assets/caloriesIcon.png";
import protein from "./assets/proteinIcon.png";
import carbs from "./assets/carbsIcon.png";
import fat from "./assets/fatIcon.png";
import propTypes from "prop-types";

export default function userNutritional({
	calorieCount,
	proteinCount,
	carbohydrateCount,
	lipidCount,
}) {
	const data = [
		{ title: "Calories", icon: calories, value: calorieCount, unit: "kCal" },
		{ title: "Protéines", icon: protein, value: proteinCount, unit: "g" },
		{ title: "Glucides", icon: carbs, value: carbohydrateCount, unit: "g" },
		{ title: "Lipides", icon: fat, value: lipidCount, unit: "g" },
	];

	return (
		<>
			{data &&
				data.map((e, i) => (
					<div className={styles.nutritionalElt} key={e.title}>
						<img src={e.icon} alt="icon"></img>
						<div className={styles.nutritionalText}>
							<p>
								{e.value}
								{e.unit}
							</p>
							<p>{e.title}</p>
						</div>
					</div>
				))}
		</>
	);
}

userNutritional.prototype = {
	calorieCount: propTypes.number,
	proteinCount: propTypes.number,
	carbohydrateCount: propTypes.number,
	lipidCount: propTypes.number,
};
