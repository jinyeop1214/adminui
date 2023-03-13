export const fetchApi = async (id: string) => {
	if (
		process.env.REACT_APP_TYK_KEY === undefined ||
		process.env.REACT_APP_TYK_KEY === null
	)
		throw new Error("Tyk Key가 없습니다.");
	const response = await fetch(`/api/apis/${id}`, {
		headers: {
			Authorization: process.env.REACT_APP_TYK_KEY,
		},
	});
	const data = await response.json();
	return data;
};