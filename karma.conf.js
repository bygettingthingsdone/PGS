//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '*/**/*.spec.js',
      '*/**/*.component.js',
      '*/**/*.module.js',
      '**/*.module.js',
      '**/*.service.js'
    ],

    autoWatch: true,

    frameworks: ['browserify', 'jasmine'],

    preprocessors: {
      '*/**/*.js': [ 'browserify' ]
    },

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-browserify'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
