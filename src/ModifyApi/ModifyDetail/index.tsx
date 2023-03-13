import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authTypeChecker } from "../../Common/CommonFunction/authTypeChecker";
import { modifyApi } from "../../FetchFunction/modifyApi";
import { Inputs } from "../../interfaces";

const Input = styled.input`
	margin: 10px;
	padding: 10px;
	display: block;
`;

interface props {
	api: any;
}

const ModifyDetail = ({ api }: props) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: {
			name: api.api_definition.name,
			target_url: api.api_definition.proxy.target_url,
			path: api.api_definition.proxy.listen_path,
		},
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const response = await modifyApi(data, api.api_definition.api_id);
		if (response.Status !== "OK")
			throw new Error("API 수정에 실패하였습니다.");
		console.log(response);
		navigate(`/api/${api.api_definition.api_id}`);
	};

	return (
		<div>
			<h3>Details</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					{...register("name", { required: true })}
					placeholder="API명"
				/>
				{errors.name && <div>빈칸을 채워주세요</div>}
				{errors.target_url && <div>빈칸을 채워주세요</div>}
				<Input
					type="text"
					{...register("path", { required: true })}
					placeholder="API Path"
				/>
				{errors.path && <div>빈칸을 채워주세요</div>}
				<Input
					type="text"
					{...register("target_url", { required: true })}
					placeholder="Upstream 서버 URL"
				/>
				<div>인증 타입: {authTypeChecker(api)}</div>
				<Input type="submit" />
			</form>
		</div>
	);
};

export default ModifyDetail;
