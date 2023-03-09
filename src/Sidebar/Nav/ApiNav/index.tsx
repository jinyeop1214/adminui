import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	cursor: pointer;
`;

const ApiNav = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavApiPage = () =>
		location.pathname !== "/apis" && navigate("/apis");

	return <Button onClick={handleNavApiPage}>Api</Button>;
};

export default ApiNav;
