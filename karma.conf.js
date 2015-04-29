
module.exports = function(config) {
  config.set({

    basePath : './',

    files : [
      'test/*.js'
    ],

    autoWatch : true,
    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['Firefox'],

    plugins : [
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    colors : true,

    reporters: ['dots'],

    htmlReporter: {
      outputDir: 'karma_report',
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false // simply replaces spaces with _ for files/dirs

      // experimental
      //preserveDescribeNesting: false, // folded suites stay folded 
      //foldAll: false, // reports start folded (only with preserveDescribeNesting)
    }
  });
};
