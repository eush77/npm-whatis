'use strict';

var registryUrl = require('registry-url')(),
    got = require('got');


module.exports = function (packageName, cb) {
  got(registryUrl + packageName, { json: true }, function (err, pkg) {
    if (err) return cb(err);
    cb(null, pkg.description);
  });
};
