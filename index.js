'use strict';
// Q: what's this mean?

// load the DotColorReporter from Karma module
var DotsColorReporter = require('karma/lib/reporters/dots_color');

/**
 * The MediawikiReporter.
 * 
 * @param {!object} baseReporterDecorator The karma base reporter.
 * @param {!Function} formatError The karma function to format an error.
 * @param {!object} config The karma config, we will get mediawikiConfig from it.
 * @constructor
 */
var MediawikiReporter = function (baseReporterDecorator, formatError, config) {
    // extend the base reporter
    baseReporterDecorator(this);
    //BaseReporter.call(this, formatError);
    //BaseColorReporter.call(this);
    DotsColorReporter.call(this, formatError);

    var firstRun = true;

    // get config from karma.conf.js file.
    config = config || {};

    // run complete event, where you could print out the summary of 
    // a test suite.
    this.onRunComplete = function(browsers, results) {
        if (!results.disconnected && !results.error) {
            if (!results.failed) {
                this.write(this.TOTAL_SUCCESS, results.success);
            } else {
                this.write(this.TOTAL_FAILED, results.failed, 
                           results.success);
            }
        }
    };
};

// inject karma runner baseReporter and config, 
// using dependence injection.
MediawikiReporter.$inject = ['baseReporterDecorator', 
                             'formatError', 
                             'config.mediawikiReporter'];

// PUBISH DI MODULE
module.exports = {
    'reporter:mediawiki': ['type', MediawikiReporter]
};
