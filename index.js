const qs = require('qs');

module.exports = (req) => {
  let url = req.url;
  const index = url.indexOf('?');

  if (index !== -1) {
    url = url.substr(index + 1);
  }

  return qs.parse(url);
}
