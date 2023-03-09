import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Api from "./Api";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Mypage from "./Mypage";

const Container = styled.div`
	position: absolute;
	top: 100px;
	left: 260px;
	width: calc(100vw - 260px);
	height: calc(100vh - 100px);
`;

const Routes = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<Container>
				<ReactRouterRoutes>
					<Route path="/apis" element={<Api />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/" element={<Home />} />
				</ReactRouterRoutes>
			</Container>
		</>
	);
};

export default Routes;
