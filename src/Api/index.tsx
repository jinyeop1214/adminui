import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../Common/ContentTitle";

const Api = () => {
	const [api, setApi] = useState<any>(undefined);
	const params = useParams<{ apiId: string }>();

	useEffect(() => {
		const fetchApi = async () => {
			if (process.env.REACT_APP_TYK_KEY) {
				const response = await fetch(`/api/apis/${params.apiId}`, {
					headers: {
						Authorization: process.env.REACT_APP_TYK_KEY,
					},
				});
				const data = await response.json();
				setApi(data);
			}
		};

		fetchApi();
	}, []);

	const authTypeChecker = (api: any) => {
		if (api.api_definition.use_keyless) return "None";
		if (api.api_definition.use_standard_auth) return "Authentication Token";
		if (api.api_definition.use_basic_auth) return "Basic Authentication";
		else return "Other";
	};

	return (
		api && (
			<>
				<ContentTitle title={api.api_definition.name} />
				<div>
					Api Url: http://localhost:8080
					{api.api_definition.proxy.listen_path}
				</div>
				<br />
				<div>
					<h3>Details</h3>
					<div>Api명: {api.api_definition.name}</div>
					<div>Path: {api.api_definition.proxy.listen_path}</div>
					<div>
						Upstream 서버 URL: {api.api_definition.proxy.target_url}
					</div>
					<div>인증 타입: {authTypeChecker(api)}</div>
				</div>
			</>
		)
	);
};

export default Api;
