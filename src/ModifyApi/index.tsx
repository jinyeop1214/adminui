import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";
import ContentTitle from "../Common/ContentTitle";
import styled from "styled-components";
import { fetchApi } from "../FetchFunction/fetchApi";
import ModifyButton from "../Api/ModifyButton";
import Title from "../Api/Title";
import ModifyDetail from "./ModifyDetail";

const Container = styled.div`
	padding: 20px;
`;

const ModifyApi = () => {
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
					<ModifyButton submit={true} />
				</ContentHeaderContainer>
				<Container>
					<Title path={api.api_definition.proxy.listen_path} />
					<br />
					<ModifyDetail api={api} />
				</Container>
			</>
		)
	);
};

export default ModifyApi;
