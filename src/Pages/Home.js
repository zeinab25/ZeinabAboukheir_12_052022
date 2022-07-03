import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";

export default function Home() {
	return (
		<>
			<Title>Utilisateurs</Title>
			<Container>
				<Button pathname="12">Utilisateur 12</Button>
				<Button pathname="18">Utilisateur 18</Button>
			</Container>
		</>
	);
}

const Title = styled.h1`
	font-weight: 700;
	font-size: 48px;
	margin-bottom: 40px;
	text-align: center;
	margin-left: 117px;
`;
const Container = styled.div`
	display: flex;
	gap: 60px;
	justify-content: center;
	margin-left: 117px;
`;
