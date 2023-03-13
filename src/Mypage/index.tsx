import React from "react";
import ContentTitle from "../Common/ContentTitle";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	height: 70px;
`;

const index = () => {
	return (
		<Container>
			<ContentTitle title="My Page" />
		</Container>
	);
};

export default index;
