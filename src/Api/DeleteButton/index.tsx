import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteApi } from "../../FetchFunction/deleteApi";

const Button = styled.div`
	position: absolute;
	top: 0;
	right: 70px;
	margin: 20px;
	cursor: pointer;
	font-weight: bold;
`;

const DeleteButton = () => {
	const params = useParams<{ apiId: string }>();
	const navigate = useNavigate();

	const handleDeleteApi = async () => {
		if (params.apiId === undefined || params.apiId === null) return;
		const response = await deleteApi(params.apiId);
		if (response.Status !== "OK")
			throw new Error("API 삭제에 실패하였습니다.");
		navigate("/apis");
	};

	return <Button onClick={handleDeleteApi}>삭제</Button>;
};

export default DeleteButton;
