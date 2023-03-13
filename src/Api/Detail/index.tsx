import React from "react";
import { authTypeChecker } from "../../Common/CommonFunction/authTypeChecker";

interface props {
	api: any;
}

const Detail = ({ api }: props) => {
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
