#!/usr/bin/env node
'use strict';

var whatis = require('./');

var help = require('help-version')(usage()).help,
    align = require('string-align');


function usage () {
  return 'Usage:  npm-whatis <package>';
}


var format = function (name, description) {
  if (name.length < 20) {
    name = align(name, 20, 'left');
  }
  return name + ' - ' + description;
};


(function (argv) {
  if (argv.length != 1) {
    return help(argv.length);
  }

  var name = argv[0];

  whatis(name, function (err, description) {
    if (err) console.error(err);
    console.log(format(name, description));
  });
}(process.argv.slice(2)));
