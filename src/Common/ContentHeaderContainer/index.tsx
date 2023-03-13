import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	height: 70px;
`;

const ContentHeaderContainer = ({ children }: { children: ReactNode }) => {
	return <Container>{children}</Container>;
};

export default ContentHeaderContainer;
