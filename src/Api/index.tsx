import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../Common/ContentTitle";
import Detail from "./Detail";
import Title from "./Title";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";

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
	}, [params]);

	return (
		api && (
			<>
				<ContentHeaderContainer>
					<ContentTitle title={api.api_definition.name} />
				</ContentHeaderContainer>
				<Title path={api.api_definition.proxy.listen_path} />
				<br />
				<Detail api={api} />
			</>
		)
	);
};

export default Api;
