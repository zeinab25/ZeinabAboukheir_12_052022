import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "./logo.png";

function Header() {
	return (
		<header>
			<nav>
				<h1>
					<img src={logo} alt="logo SportSee" />
				</h1>
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							Accueil
						</NavLink>
					</li>

					<li>Profil</li>

					<li>Réglage</li>

					<li>Communauté</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
