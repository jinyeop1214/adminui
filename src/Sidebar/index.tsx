import React from "react";
import ApiNav from "./Nav/ApiNav";
import styled from "styled-components";

const Container = styled.div`
	width: 260px;
	height: calc(100vh - 100px);
	background-color: black;
	color: white;
`;

const Sidebar = () => {
	return (
		<Container>
			<ApiNav />
		</Container>
	);
};

export default Sidebar;
