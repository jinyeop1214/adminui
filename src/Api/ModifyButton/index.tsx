import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

interface props {
	submit: boolean;
}

const Button = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin: 20px;
	cursor: pointer;
	font-weight: bold;
`;

const ModifyButton = ({ submit }: props) => {
	const params = useParams<{ apiId: string }>();
	const navigate = useNavigate();
	const handleNavModifyApiPage = () => {
		params.apiId && navigate(`/api/${params.apiId}/modify`);
	};

	return (
		<Button onClick={handleNavModifyApiPage}>
			{submit ? "완료" : "수정"}
		</Button>
	);
};

export default ModifyButton;
