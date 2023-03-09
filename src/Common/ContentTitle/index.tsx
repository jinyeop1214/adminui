import React from "react";

interface props {
	title: string;
}

const ContentTitle = ({ title }: props) => {
	return <h2>{title}</h2>;
};

export default ContentTitle;
