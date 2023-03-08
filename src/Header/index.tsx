import React from "react";
import Logo from "./Logo";
import UserIcon from "./UserIcon";
import style from "./index.module.css";

const Header = () => {
	return (
		<div className={style.header}>
			<Logo />
			<UserIcon />
		</div>
	);
};

export default Header;
