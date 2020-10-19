const qs = require('qs');
const url = require('url');

module.exports = request => {
	return qs.parse(
		new url.URL(request.url).search,
		{ignoreQueryPrefix: true}
	);
};
