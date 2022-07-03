import styled from "styled-components";
import propTypes from "prop-types";

import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";

export default function AverageChart({ data }) {
	return (
		<>
			<LineChart width={258} height={303} data={data}>
				<rect
					width="258"
					height="263"
					fill="#FF0000"
					x="0"
					y="5"
					rx="5px"
					stroke="none"
				></rect>

				<text
					y={20}
					fill="white"
					opacity={0.7}
					textAnchor="middle"
					dominantBaseline="central"
				>
					<tspan x="90" dy="15" fontSize="15px" fontWeight="500">
						Durée moyenne des
					</tspan>
					<tspan x="54" dy="22" fontSize="15px" fontWeight="500">
						sessions
					</tspan>
				</text>
				<XAxis
					dy={-40}
					padding={{ left: 10, right: 10 }}
					type="number"
					dataKey="day"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					allowDecimals={false}
					tickCount={10}
					tickFormatter={getDay}
					domain={["dataMin - 0", "dataMax +0"]}
					stroke="white"
					tick={{ opacity: 0.7 }}
				/>
				<YAxis
					hide
					dataKey="sessionLength"
					type="number"
					domain={["dataMin - 60", "dataMax +90"]}
					allowDecimals={false}
				/>
				<Tooltip content={<CustomTooltip />} cursor={<CustomHover />} />

				<Line
					type="natural"
					stroke="#FFFFFF"
					dataKey="sessionLength"
					dot={false}
					activeDot={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 10 }}
				/>
			</LineChart>
		</>
	);
}

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<StyleTooltip>
				<p>{`${payload[0].value} min`}</p>
			</StyleTooltip>
		);
	}
	return null;
};

const CustomHover = ({ points }) => {
	return <rect width="258" height="263" fill="rgba(0, 0, 0, 0.1)" y="5" x={points[0].x} />;
};

const getDay = (day) => Days[day - 1];
const Days = ["L", "M", "M", "J", "V", "S", "D"];

const StyleTooltip = styled.div`
	background: #ffffff;
	font-weight: 500;
	padding: 10px;
`;

AverageChart.propTypes = {
	data: propTypes.arrayOf(
		propTypes.shape({
			day: propTypes.number,
			sessionLenght: propTypes.number,
		}),
	),
};

CustomTooltip.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array,
};

CustomHover.propTypes = {
	points: propTypes.array,
};
