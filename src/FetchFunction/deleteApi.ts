import { tykKeyChecker } from "../Common/CommonFunction/tykKeyChecker";

export const deleteApi = async (id: string) => {
	const tkyKey = tykKeyChecker();
	const response = await fetch(`/api/apis/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: tkyKey,
		},
	});
	return await response.json();
};
