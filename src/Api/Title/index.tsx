import React from "react";

interface props {
	path: string;
}

const Title = ({ path }: props) => {
	return (
		<div>
			API URL: http://localhost:8080
			{path}
		</div>
	);
};

export default Title;
