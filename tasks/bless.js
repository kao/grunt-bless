/*
 * Provides bless.js as Grunt task
 *
 * Copyright (c) 2014 Flavien Cogez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var _ = grunt,
      bless = require('bless');

	_.registerMultiTask('bless', 'Grunt Task using Bless.js to split your CSS into files just for the pleasure of Internet Explorer', function () {

    var options = this.options({
      cacheBuster: true,
      cleanup: true,
      compress: false,
      force: _.option('force') || false,
      imports: true
    });
    _.log.writeflags(options, 'options');

    this.files.forEach(function (file) {
      var css = '';

      file.src.forEach(function (filePath) {
        if (!_.file.exists(filePath)) {
          _.log.warn('Source file "' + filepath + '" not found.');
        } else {
          css += _.file.read(filePath);
        }
      });

      var blessParser = new (bless.Parser) ({
        output: file.dest,
        options: options
      });

      blessParser.parse(css, function (err, blessFiles, selectorCount) {
        if (err) {
          _.log.error(err);
          throw _.util.error(err);
        }

        _.log.writeln('Found ' + selectorCount + ' selectors.');

        if (blessFiles.length > 1) {
          _.log.writeln('Splitting into ' + blessFiles.length + ' files.');
        } else {
          _.log.writeln('Not splitting.');
        }

        blessFiles.forEach(function (blessFile) {
          _.file.write(blessFile.filename, blessFile.content);
        });
      });
    });
	});
};


