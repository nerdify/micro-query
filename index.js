const qs = require('qs');
const url = require('url');

module.exports = req => {
	return qs.parse(
        url.parse(req.url).search,
        { ignoreQueryPrefix: true }
    );
};
