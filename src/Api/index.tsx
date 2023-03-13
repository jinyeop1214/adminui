import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../Common/ContentTitle";
import Detail from "./Detail";
import Title from "./Title";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";
import { fetchApi } from "../FetchFunction/fetchApi";
import styled from "styled-components";

const Container = styled.div`
	padding: 20px;
`;

const Api = () => {
	const [api, setApi] = useState<any>(undefined);
	const params = useParams<{ apiId: string }>();

	useEffect(() => {
		const fetchApiWrapper = async (id: string) => {
			const data = await fetchApi(id);
			setApi(data);
		};

		params.apiId && fetchApiWrapper(params.apiId);
	}, [params]);

	return (
		api && (
			<>
				<ContentHeaderContainer>
					<ContentTitle title={api.api_definition.name} />
				</ContentHeaderContainer>
				<Container>
					<Title path={api.api_definition.proxy.listen_path} />
					<br />
					<Detail api={api} />
				</Container>
			</>
		)
	);
};

export default Api;
