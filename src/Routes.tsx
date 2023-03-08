import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Api from "./Api";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import style from "./Routes.module.css";

const Routes = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<div className={style.content}>
				<ReactRouterRoutes>
					<Route path="/apis" element={<Api />} />
					<Route path="/" element={<Home />} />
				</ReactRouterRoutes>
			</div>
		</>
	);
};

export default Routes;
