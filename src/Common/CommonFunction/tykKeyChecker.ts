export const tykKeyChecker = (): string => {
	if (
		process.env.REACT_APP_TYK_KEY === undefined ||
		process.env.REACT_APP_TYK_KEY === null
	)
		throw new Error("Tyk Key가 없습니다.");
	return process.env.REACT_APP_TYK_KEY;
};
