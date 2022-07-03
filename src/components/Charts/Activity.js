import styled from "styled-components";
import propTypes from "prop-types";

import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	ResponsiveContainer,
} from "recharts";

export default function ActivityChart({ data }) {
	return (
		<>
			<Container>
				<ResponsiveContainer height="100%" width="100%">
					<BarChart
						data={data}
						margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
						barGap="8"
					>
						<text
							x={100}
							y={14}
							fill="black"
							textAnchor="middle"
							dominantBaseline="central"
						>
							<tspan fontSize="18px" fontWeight="500">
								Activité quotidienne
							</tspan>
						</text>

						<Legend
							verticalAlign="top"
							height={90}
							align="right"
							iconType="circle"
							iconSize={9}
							formatter={(value) => <StyleLegend>{value}</StyleLegend>}
						/>
						<CartesianGrid strokeDasharray="3" vertical={false} />
						<XAxis
							dataKey="day"
							tickFormatter={(day) => new Date(day).getDate()}
							fontSize={14}
							tickMargin={15}
							tickLine={false}
							padding={{ right: -37, left: -36 }}
						/>
						<YAxis
							orientation={"right"}
							type="number"
							yAxisId="kilo"
							axisLine={false}
							tickLine={false}
							allowDecimals={false}
							domain={["dataMin-1", "dataMax"]}
							tickCount={5}
							dx={30}
						/>
						<YAxis type="number" yAxisId="cal" tickCount={30} hide />
						<Tooltip
							content={<CustomTooltip />}
							position={{ y: 40 }}
							cursor={{ opacity: 0.5 }}
							active={true}
							fill="red"
						/>
						<Bar
							dataKey="kilogram"
							name="Poids (kg)"
							fill="#282D30"
							yAxisId="kilo"
							radius={[10, 10, 0, 0]}
							barSize={10}
						/>
						<Bar
							dataKey="calories"
							name="Calories brûlées (kCal)"
							fill="#E60000"
							yAxisId="cal"
							radius={[10, 10, 0, 0]}
							barSize={10}
						/>
					</BarChart>
				</ResponsiveContainer>
			</Container>
		</>
	);
}

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<StyleTooltip>
				<p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}Kcal`}</p>
			</StyleTooltip>
		);
	}
	return null;
};

const Container = styled.div`
	background-color: #fbfbfb;
	padding: 20px;
	// width: 80%;
	// width: 740px;
	// min-width: 400px

	height: 320px;
	border-radius: 5px;
`;

const StyleTooltip = styled.div`
	margin-left: 10px;
	background: #e60000;
	font-size: 12px;
	color: white;
	padding: 15px 8px;
	& :first-child {
		margin-bottom: 35px;
		text-align: center;
	}
`;

const StyleLegend = styled.span`
	color: #74798C;
	padding-left : 10px;
	 padding-right : 25px;
	
	}
`;

CustomTooltip.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array,
};

ActivityChart.propTypes = {
	data: propTypes.arrayOf(
		propTypes.shape({
			day: propTypes.string,
			kilogram: propTypes.number,
			calories: propTypes.number,
		}),
	),
};
