'use strict';

var rp = require('request-promise');
var parser = require('xml2js').parseString;
var createObj = require(__dirname + '/../resources/callbacks.js');
var checkErrors = require(__dirname + '/../resources/errorHandling.js');

module.exports = function request(geo, cbFunc) {
	var obj = createObj(arguments, request);

	var error = checkErrors(obj);
	if (error instanceof Error) return Promise.reject(obj.cbFunc(error));

	var options = {
		uri: 'https://www.' + obj.countryDomain + '/trends/hottrends/atom/feed?pn=p' + obj.countryCode
	};

	console.log(options.uri);

	return rp(options).then(function (results) {
		return new Promise(function (resolve, reject) {
			parser(results, function (err, result) {
				if (err) reject(obj.cbFunc(err));
				resolve(obj.cbFunc(null, result));
			});
		});
	}).catch(function (err) {
		return Promise.reject(obj.cbFunc(err));
	});
};