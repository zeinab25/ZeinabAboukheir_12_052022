import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import { RadarChart, PolarAngleAxis, Radar, PolarRadiusAxis, PolarGrid } from "recharts";

export default function PerformanceChart({ data }) {
	return (
		<Container>
			<RadarChart
				outerRadius={80}
				cx="50%"
				cy="50%"
				width={258}
				height={263}
				data={data.reduce((acc, val) => [val, ...acc], [])}
			>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis
					dataKey="kind"
					tickSize="13"
					dy={5}
					tick={{ fontSize: "12", fill: "white" }}
					tickFormatter={getLabel}
				/>
				<PolarRadiusAxis tick={false} axisLine={false} tickCount={6} angle={360} />
				<Radar dataKey="value" fill="#FF0101" fillOpacity={0.8} />
			</RadarChart>
		</Container>
	);
}

const Labels = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
const getLabel = (kind) => Labels[kind - 1];

const Container = styled.div`
	background-color: black;
	width: 258px;
	height: 263px;
	border-radius: 5px;
	margin-top: 5px;
`;

PerformanceChart.propTypes = {
	data: propTypes.arrayOf(
		propTypes.shape({
			value: propTypes.number,
			kind: propTypes.number,
		}),
	),
};
