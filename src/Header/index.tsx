import React from "react";
import Logo from "./Logo";
import UserIcon from "./UserIcon";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	height: 100px;
	background-color: lightgray;
	color: white;
`;

const Header = () => {
	return (
		<Container>
			<Logo />
			<UserIcon />
		</Container>
	);
};

export default Header;
