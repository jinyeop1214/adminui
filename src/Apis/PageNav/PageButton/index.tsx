import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface CSSProps {
	selected: boolean;
	left: boolean;
	right: boolean;
}

interface Props {
	current: number;
	content: number;
	left: boolean;
	right: boolean;
}

const Container = styled.div`
	display: inline-block;
	padding: 15px;
	border: 1px solid gray;
	cursor: pointer;
	background-color: ${(props: CSSProps) =>
		props.selected ? "green" : "white"};
	border-top-left-radius: ${(props: CSSProps) => (props.left ? "18" : "0")}px;
	border-bottom-left-radius: ${(props: CSSProps) =>
		props.left ? "18" : "0"}px;
	border-top-right-radius: ${(props: CSSProps) =>
		props.right ? "18" : "0"}px;
	border-bottom-right-radius: ${(props: CSSProps) =>
		props.right ? "18" : "0"}px;
`;

const PageButton = ({ current, content, left, right }: Props) => {
	const navigate = useNavigate();
	const handlePageNavButton = () => {
		navigate(`/apis/${content}`);
	};

	return (
		<Container
			selected={current === content}
			left={left}
			right={right}
			onClick={current === content ? undefined : handlePageNavButton}
		>
			{content}
		</Container>
	);
};

export default PageButton;
