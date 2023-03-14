import React from "react";
import styled from "styled-components";
import PageButton from "./PageButton";

interface Props {
	total: number;
	current: number;
}

const Div = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Container = styled.div`
	margin-right: 20px;
`;

const PageNav = ({ total, current }: Props) => {
	console.log(
		Array(total)
			.fill(0)
			.map((_, index) => index)
	);

	return (
		<Div>
			<div></div>
			<Container>
				{Array(total)
					.fill(0)
					.map((_, index) => {
						return (
							<PageButton
								current={current}
								content={index + 1}
								left={index === 0 ? true : false}
								right={index === total - 1 ? true : false}
							/>
						);
					})}
			</Container>
		</Div>
	);
};

export default PageNav;
