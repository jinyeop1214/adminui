import { tykKeyChecker } from "../Common/CommonFunction/tykKeyChecker";

export const fetchApis = async () => {
	const tkyKey = tykKeyChecker();
	const response = await fetch(`/api/apis`, {
		headers: {
			Authorization: tkyKey,
		},
	});
	const data = await response.json();
	return data.apis;
};
