import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";
import ContentTitle from "../Common/ContentTitle";
import styled from "styled-components";
import { postNewApi } from "../FetchFunction/postNewApi";
import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const response = await postNewApi(data);
		if (response.Status !== "OK")
			throw new Error("새 API 생성에 실패하였습니다.");
		navigate(`/api/${response.ID}`);
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
