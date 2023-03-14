import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Apis from "./Apis";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Mypage from "./Mypage";
import Api from "./Api";
import AddApi from "./AddApi";
import ModifyApi from "./ModifyApi";

const Container = styled.div`
	position: absolute;
	top: 70px;
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
					<Route path="/api/new" element={<AddApi />} />
					<Route path="/api/:apiId/modify" element={<ModifyApi />} />
					<Route path="/api/:apiId" element={<Api />} />
					<Route path="/apis/:page" element={<Apis />} />
					<Route path="/apis" element={<Apis />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/" element={<Home />} />
				</ReactRouterRoutes>
			</Container>
		</>
	);
};

export default Routes;
