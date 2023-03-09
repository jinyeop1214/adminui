import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 20px;
	cursor: pointer;
`;

const UserIcon = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavMyPage = () =>
		location.pathname !== "/mypage" && navigate("/mypage");

	return <Button onClick={handleNavMyPage}>User Profile</Button>;
};

export default UserIcon;
