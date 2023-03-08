import React from "react";
import ApiNav from "./Nav/ApiNav";
import style from "./index.module.css";

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<ApiNav />
		</div>
	);
};

export default Sidebar;
