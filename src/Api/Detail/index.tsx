import React from "react";

interface props {
	api: any;
}

const Detail = ({ api }: props) => {
	const authTypeChecker = (api: any) => {
		if (api.api_definition.use_keyless) return "None";
		if (api.api_definition.use_standard_auth) return "Authentication Token";
		if (api.api_definition.use_basic_auth) return "Basic Authentication";
		else return "Other";
	};

	return (
		<div>
			<h3>Details</h3>
			<div>Api명: {api.api_definition.name}</div>
			<div>Path: {api.api_definition.proxy.listen_path}</div>
			<div>Upstream 서버 URL: {api.api_definition.proxy.target_url}</div>
			<div>인증 타입: {authTypeChecker(api)}</div>
		</div>
	);
};

export default Detail;
