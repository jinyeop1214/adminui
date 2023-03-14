import { tykKeyChecker } from "../Common/CommonFunction/tykKeyChecker";

export const fetchApis = async (page: number) => {
	console.log("PAGE", page);
	const tkyKey = tykKeyChecker();
	const response = await fetch(`/api/apis?p=${page}`, {
		headers: {
			Authorization: tkyKey,
		},
	});
	const data = await response.json();
	console.log(data);
	return data;
};

// Tyk Dashboard 2페이지를 누르면 여기로 요청
// http://localhost:3000/apis?q=&p=2&category=&api_type=&sort=
// 첨엔
// http://localhost:3000/apis
// 담부턴
// http://localhost:3000/apis?q=&p=1&category=&api_type=&sort=
//
