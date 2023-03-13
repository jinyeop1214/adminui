export const pathFormatter = (path: string) => {
	//여기말고 인풋 칸에서 경고하기 빈칸, /, // //..// 등등
	//target url도 올바른 형식. http:// 등등
	if (path[0] !== "/" && path[path.length - 1] !== "/") return `/${path}/`;
	if (path[0] === "/" && path[path.length - 1] !== "/") return `${path}/`;
	if (path[0] !== "/" && path[path.length - 1] === "/") return `/${path}`;
	if (path[0] === "/" && path[path.length - 1] === "/") return `${path}`;
};
