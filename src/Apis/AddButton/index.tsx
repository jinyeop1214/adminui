import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 20px;
	cursor: pointer;
	font-weight: bold;
`;

const AddButton = () => {
	const navigate = useNavigate();
	const handleNavAddApiPage = () => {
		navigate(`/api/new`);
	};

	return <Button onClick={handleNavAddApiPage}>새 Api 생성</Button>;
};

export default AddButton;
