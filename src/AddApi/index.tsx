import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";
import ContentTitle from "../Common/ContentTitle";
import styled from "styled-components";

type Inputs = {
	name: string;
	target_url: string;
	path: string;
};

const Input = styled.input`
	margin: 10px;
	padding: 10px;
	display: block;
`;

const AddApi = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		// liten path 앞 뒤 / 붙이기
		const addNewApiBodyFormat = (data: Inputs) => ({
			api_definition: {
				name: data.name,
				use_keyless: true,
				use_standard_auth: false,
				auth: {
					auth_header_name: "",
					use_basic_auth: false,
					use_oauth2: false,
					oauth_meta: {
						allowed_access_types: [],
						allowed_authorize_types: [],
						auth_login_redirect: "",
					},
				},
				version_data: {
					not_versioned: true,
					versions: {
						Default: {
							name: "Default",
							use_extended_paths: true,
							extended_paths: {
								ignored: [],
								white_list: [],
								black_list: [],
							},
							global_headers: {},
							global_headers_remove: [],
							global_size_limit: 0,
							override_target: "",
							strip_auth_data: false,
							extended_map: {},
							extended_map_rules: [],
						},
					},
				},
				proxy: {
					listen_path: data.path,
					target_url: data.target_url,
					strip_listen_path: true,
					enable_load_balancing: false,
					service_discovery: {
						use_discovery_service: false,
						query_endpoint: "",
						use_nested_query: false,
						parent_data_path: "",
						data_path: "",
						cache_timeout: 0,
						services: {},
					},
					transport: {
						ssl_ciphers: [],
						ssl_min_version: 0,
						proxy_url: "",
						ssl_client_cert: "",
						ssl_client_key: "",
						ssl_verify_hostname: false,
						ssl_certificates: {},
					},
				},
				active: true,
			},
		});

		const postNewApi = async (data: Inputs) => {
			if (process.env.REACT_APP_TYK_KEY) {
				const response = await fetch(`/api/apis`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: process.env.REACT_APP_TYK_KEY,
					},
					body: JSON.stringify(addNewApiBodyFormat(data)),
				});
				const retData = await response.json();
				return retData;
			}
		};

		const res = await postNewApi(data);
		if (res.Status !== "OK") console.log("FAIL");
		if (res.Status === "OK") console.log("SUCCESS");
	};

	return (
		<>
			<ContentHeaderContainer>
				<ContentTitle title="Create New API" />
			</ContentHeaderContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					{...register("name", { required: true })}
					placeholder="API명"
				/>
				{errors.name && <div>빈칸을 채워주세요</div>}
				<Input
					type="text"
					{...register("target_url", { required: true })}
					placeholder="Upstream 서버 URL"
				/>
				{errors.target_url && <div>빈칸을 채워주세요</div>}
				<Input
					type="text"
					{...register("path", { required: true })}
					placeholder="API Path"
				/>
				{errors.path && <div>빈칸을 채워주세요</div>}
				<Input type="submit" />
			</form>
		</>
	);
};

export default AddApi;
