import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";
import propTypes from "prop-types";

export default function Button(props) {
	return (
		<Link to={`user/${props.pathname}`} className={styles.button}>
			{props.children}
		</Link>
	);
}

Button.propTypes = {
	pathname: propTypes.string,
	children: propTypes.string,
};
