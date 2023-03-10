import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContentHeaderContainer from "../Common/ContentHeaderContainer";
import ContentTitle from "../Common/ContentTitle";
import styled from "styled-components";
import { addNewApi } from "../FetchFunction/addNewApi";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../interfaces";

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
		const response = await addNewApi(data);
		if (response.Status !== "OK")
			throw new Error("새 API 생성에 실패하였습니다.");
		navigate(`/api/${response.ID}`);
	};

	return (
		<>
			<ContentHeaderContainer>
				<ContentTitle title="새 API 생성" />
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
					{...register("path", { required: true })}
					placeholder="API Path"
				/>
				{errors.path && <div>빈칸을 채워주세요</div>}
				<Input
					type="text"
					{...register("target_url", { required: true })}
					placeholder="Upstream 서버 URL"
				/>
				{errors.target_url && <div>빈칸을 채워주세요</div>}
				<Input type="submit" />
			</form>
		</>
	);
};

export default AddApi;
