export default {
	methods: {
		$_getFilterQueryParameters(invert) {
			const queryParameters = this.$_getQueryParameters();
			const newQuery = {};
			Object.entries(queryParameters)
				.filter(([key]) =>
					invert ? !key.startsWith("vf-") : key.startsWith("vf-")
				)
				.forEach(([key, value]) => {
					if (invert) {
						newQuery[key] = value;
					} else {
						newQuery[key.replace("vf-", "")] = JSON.parse(
							decodeURIComponent(value)
						);
					}
				});
			return newQuery;
		},
		$_getQueryParameters() {
			const query = {};
			(window.location.search || "?")
				.slice(1)
				.split("&")
				.filter((val) => !!val)
				.map((a) => a.split("="))
				.forEach(([key, value]) => {
					query[key] = value;
				});
			return query;
		},
		$_updateUrlQueryString(newQuery) {
			const newUrlQueryString = `?${Object.entries(newQuery)
				.map(([key, value]) => `${key}=${value}`)
				.join("&")}`;
			console.log("update url", newUrlQueryString);
			window.history.replaceState(
				{},
				"",
				decodeURIComponent(`${window.location.pathname}${newUrlQueryString}`)
			);
		},
	},
};
