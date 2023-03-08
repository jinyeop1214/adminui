import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./index.module.css";

const ApiNav = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavApiPage = () =>
		location.pathname !== "/apis" && navigate("/apis");

	return <button onClick={handleNavApiPage}>Api</button>;
};

export default ApiNav;
