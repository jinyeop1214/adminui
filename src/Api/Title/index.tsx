import React from "react";

interface props {
	path: string;
}

const Title = ({ path }: props) => {
	return (
		<div>
			Api Url: http://localhost:8080
			{path}
		</div>
	);
};

export default Title;
