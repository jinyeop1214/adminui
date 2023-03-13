import React from "react";
import styled from "styled-components";

interface props {
	title: string;
}

const H2 = styled.h2`
	position: absolute;
	top: 0;
	left: 0;
	padding: 20px;
	margin: 0;
	cursor: pointer;
`;

const ContentTitle = ({ title }: props) => {
	return <H2>{title}</H2>;
};

export default ContentTitle;
