import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Legend } from "recharts";
import propTypes from "prop-types";

export default function ScoreChart({ data }) {
	const scoreData = [
		{ name: "score", value: data, fill: "red" },
		{ name: "max", value: 1 - data, fill: "#fbfbfb" },
	];
	const renderMiddleShape = [{ name: "middle", value: 100, fill: "#FFFFFF" }];
	return (
		<ContainerChart>
			<PieChart width={258} height={263}>
				<text x={45} y={35} fill="#20253A" textAnchor="middle" dominantBaseline="central">
					<tspan fontSize="15px" fontWeight="500">
						Score
					</tspan>
				</text>
				<Pie
					data={scoreData}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					startAngle={90}
					endAngle={450}
					innerRadius="65%"
					outerRadius="72%"
					stroke="none"
					cornerRadius={50}
				/>
				<Pie
					data={renderMiddleShape}
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius="65%"
					stroke="none"
				/>
				<Legend verticalAlign="middle" content={CustomLegend} />
			</PieChart>
		</ContainerChart>
	);
}

const CustomLegend = ({ payload }) => (
	<LegendContainer>
		<h3>{payload[0].payload.value * 100}%</h3>
		<div>de votre</div>
		<div>objectif</div>
	</LegendContainer>
);

const LegendContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& h3 {
		font-size: 26px;
		font-weight: 700;
		line-height: 24px;
	}
	div {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		color: #74798c;
	}
`;

const ContainerChart = styled.div`
	background-color: #fbfbfb;
	width: 258px;
	height: 263px;
	border-radius: 5px;
	margin-top: 5px;
`;

ScoreChart.propTypes = {
	data: propTypes.number,
};

CustomLegend.propTypes = {
	payload: propTypes.array,
};
