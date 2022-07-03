import React from "react";
import styles from "./sideNavBar.module.css";
import iconByke from "./assets/iconByke.png";
import iconGym from "./assets/iconGym.png";
import iconSwim from "./assets/iconSwim.png";
import iconYoga from "./assets/iconYoga.png";

function SideNavBar() {
	return (
		<div className={styles.side_nav_bar}>
			<nav>
				<ul>
					<li>
						<img src={iconYoga} />
					</li>
					<li>
						<img src={iconSwim} />
					</li>
					<li>
						<img src={iconByke} />
					</li>
					<li>
						<img src={iconGym} />
					</li>
				</ul>
			</nav>
			<p className={styles.copyright}>Copyright, SportSee 2020</p>
		</div>
	);
}

export default SideNavBar;
