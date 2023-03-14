import dayjs from "dayjs";
import React, { MouseEventHandler, useEffect, useState } from "react";
import ContentTitle from "../Common/ContentTitle";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import AddButton from "./AddButton";
import { fetchApis } from "../FetchFunction/fetchApis";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";
import PageNav from "./PageNav";

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	margin-bottom: 1rem;
	color: #333;
	font-size: 0.9rem;
	font-weight: 400;
	line-height: 1.5;
	background-color: #fff;
	border: 1px solid #dee2e6;
	border-right: none;
	border-bottom: none;
`;
const TH = styled.th`
	padding: 0.75rem;
	vertical-align: bottom;
	border-bottom: 2px solid #dee2e6;
	border-right: 1px solid #dee2e6;
	text-align: left;
`;
const TD = styled.td`
	padding: 0.75rem;
	vertical-align: top;
	border-top: none;
	border-bottom: 1px solid #dee2e6;
	border-right: 1px solid #dee2e6;
`;
const TDButton = styled.td`
	padding: 0.75rem;
	vertical-align: top;
	border-top: none;
	border-bottom: 1px solid #dee2e6;
	border-right: 1px solid #dee2e6;
	font-weight: bold;
	cursor: pointer;
`;

const Apis = () => {
	const params = useParams<{ page?: string }>();
	const [apis, setApis] = useState<any>([]);
	const [totalPages, setTotalPages] = useState<number>(0);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(params.page);
		const fetchApisWrapper = async () => {
			const data = await fetchApis(
				params.page ? parseInt(params.page) : 1
			);
			console.log(data);
			setApis(data.apis);
			setTotalPages(data.pages);
		};

		fetchApisWrapper();
	}, [params]);

	const handleNavAPIDetailPage: MouseEventHandler<
		HTMLTableDataCellElement
	> = (e) => navigate(`/api/${e.currentTarget.dataset.id}`);

	const typeDiscriminator = (api: any) => {
		if (
			api.api_definition.graphql.enabled === null ||
			api.api_definition.graphql.enabled === undefined
		) {
			console.log("API Type에 대한 정보가 없습니다.");
			return "HTTP";
		}
		if (api.api_definition.graphql.enabled === false) return "HTTP";
		if (api.api_definition.proxy.target_url === "") return "UDG";
		return "GraphQL";
	};

	const timeFormatter = (time: string): string => {
		return dayjs(`${time}`).format("YYYY.MM.DD HH:mm:ss");
	};

	return (
		<div>
			<ContentHeaderContainer>
				<ContentTitle title="APIs" />
				<AddButton />
			</ContentHeaderContainer>
			<Table>
				<thead>
					<tr>
						<TH>API 이름</TH>
						<TH>타입</TH>
						<TH>타겟</TH>
						<TH>생성일</TH>
					</tr>
				</thead>
				<tbody>
					{apis.map((api: any, index: number) => {
						return (
							<tr key={index}>
								<TDButton
									onClick={handleNavAPIDetailPage}
									data-id={api.api_definition.api_id}
								>
									{api.api_definition.name}
								</TDButton>
								<TD>{typeDiscriminator(api)}</TD>
								<TD>{api.api_definition.proxy.target_url}</TD>
								<TD>{timeFormatter(api.created_at)}</TD>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<PageNav
				total={totalPages}
				current={params.page ? parseInt(params.page) : 1}
			/>
		</div>
	);
};

export default Apis;
