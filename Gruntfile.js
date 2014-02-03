/*
 * grunt-bless
 * https://github.com/kao/grunt-bless
 *
 * Copyright (c) 2014 Flavien Cogez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var config = {};

  config.jshint = {
    all: [ 'Gruntfile.js', 'tasks/*.s' ],
    options: {
      jshintrc: '.jshintrc'
    }
  };

  config.bless = {
    files: {
      src: ['test/css/example.css'],
      dest: 'test/css/example.ie.css',
      filter: 'isFile'
    },
    options: { }
  };

  grunt.initConfig(config);

  grunt.option('stack', true);
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('test', ['jshint', 'bless']);
  grunt.registerTask('default', ['bless']);
};

