import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	padding: 20px;
	cursor: pointer;
`;

const Logo = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavHomePage = () => location.pathname !== "/" && navigate("/");

	return <Button onClick={handleNavHomePage}>Admin UI</Button>;
};

export default Logo;
