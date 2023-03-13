export const authTypeChecker = (api: any) => {
	if (api.api_definition.use_keyless) return "None";
	if (api.api_definition.use_standard_auth) return "Authentication Token";
	if (api.api_definition.use_basic_auth) return "Basic Authentication";
	else return "Other";
};
