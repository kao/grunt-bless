Grunt Bless
===================

Here a Grunt task using [Bless.js](http://blesscss.com/) to split your CSS into files just for the pleasure of Internet Explorer.

Configuration
===================

    module.exports = function (grunt) {
      var config = {};

      config.bless = {
        files: {
          src: ['test/css/example.css'],
          dest: 'test/css/example.ie.css',
          filter: 'isFile'
        },
        options: { }
      };
      grunt.initConfig(config);
    }

Usage
===================

    $ grunt bless

