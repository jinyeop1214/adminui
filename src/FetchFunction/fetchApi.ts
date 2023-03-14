import { tykKeyChecker } from "../Common/CommonFunction/tykKeyChecker";

export const fetchApi = async (id: string) => {
	const tkyKey = tykKeyChecker();
	const response = await fetch(`/api/apis/${id}`, {
		headers: {
			Authorization: tkyKey,
		},
	});
	const data = await response.json();
	return data;
};
