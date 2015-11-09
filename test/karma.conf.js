
module.exports = function(config) {
  config.set({

    basePath : './',

    files : [
      '*.js'
    ],

    autoWatch : true,
    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['Firefox'],

    plugins : [
            'karma-mediawiki-reporter',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    colors : true,

    reporters: ['mediawiki'],

    // configuration for mediawiki reporter
    mediawikiReporter: {
      // configuration for nodemw.
      nodemwServer: 'en.wikipwdia.org',
      nodemwPath: '/w',
      // default is offline, only print out 
      // the wiki page infomation.
      offline: true,
      // default pagetytle will be the browserName,
      // TODO: a list of field name for page title.
      pageTitle: '%COMMIT%-%BROWSER_NAME%',
      // category names separated by ','
      pageCategory: 'CI Build,Karma Build',
    },

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
