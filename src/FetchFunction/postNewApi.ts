type ApiInfo = {
	name: string;
	target_url: string;
	path: string;
};

const pathFormatter = (path: string) => {
	//여기말고 인풋 칸에서 경고하기 빈칸, /, // //..// 등등
	if (path[0] !== "/" && path[path.length - 1] !== "/") return `/${path}/`;
	if (path[0] === "/" && path[path.length - 1] !== "/") return `${path}/`;
	if (path[0] !== "/" && path[path.length - 1] === "/") return `/${path}`;
	if (path[0] === "/" && path[path.length - 1] === "/") return `${path}`;
};

const addNewApiBodyFormat = (data: ApiInfo) => {
	const path = pathFormatter(data.path);
	return {
		api_definition: {
			name: data.name,
			use_keyless: true,
			use_standard_auth: false,
			auth: {
				auth_header_name: "",
				use_basic_auth: false,
				use_oauth2: false,
				oauth_meta: {
					allowed_access_types: [],
					allowed_authorize_types: [],
					auth_login_redirect: "",
				},
			},
			version_data: {
				not_versioned: true,
				versions: {
					Default: {
						name: "Default",
						use_extended_paths: true,
						extended_paths: {
							ignored: [],
							white_list: [],
							black_list: [],
						},
						global_headers: {},
						global_headers_remove: [],
						global_size_limit: 0,
						override_target: "",
						strip_auth_data: false,
						extended_map: {},
						extended_map_rules: [],
					},
				},
			},
			proxy: {
				listen_path: path,
				target_url: data.target_url,
				strip_listen_path: true,
				enable_load_balancing: false,
				service_discovery: {
					use_discovery_service: false,
					query_endpoint: "",
					use_nested_query: false,
					parent_data_path: "",
					data_path: "",
					cache_timeout: 0,
					services: {},
				},
				transport: {
					ssl_ciphers: [],
					ssl_min_version: 0,
					proxy_url: "",
					ssl_client_cert: "",
					ssl_client_key: "",
					ssl_verify_hostname: false,
					ssl_certificates: {},
				},
			},
			active: true,
		},
	};
};

export const postNewApi = async (data: ApiInfo) => {
	if (
		process.env.REACT_APP_TYK_KEY === undefined ||
		process.env.REACT_APP_TYK_KEY === null
	)
		throw new Error("Tyk Key가 없습니다.");
	const response = await fetch(`/api/apis`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: process.env.REACT_APP_TYK_KEY,
		},
		body: JSON.stringify(addNewApiBodyFormat(data)),
	});
	return await response.json();
};
