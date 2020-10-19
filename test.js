const test = require('ava');

const query = require('.');

test('query string', t => {
	const request = {url: 'https://someapi.com?test=1&test2'};

	t.is(query(request).test, '1');
	t.is(query(request).test2, '');
	t.is(undefined, query(request).test3);
});
