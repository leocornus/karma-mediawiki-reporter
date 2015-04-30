'use strict';
// Q: what's this mean?

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

    var self = this;
    var firstRun = true;

    config.mediawikiReporter = config.mediawikiReporter || {};

    this.onRunComplete = function(browsers, results) {
        if (!results.disconnected && !results.error) {
            if (!results.failed) {
                this.write(this.TOTAL_SUCCESS, results.success);
            } else {
                this.write(this.TOTAL_FAILED, results.failed, results.success);
            }
        }
    };
};

// inject karma runner baseReporter and config, 
// using dependence injection.
MediawikiReporter.$inject = ['baseReporterDecorator', 
                             'formatError', 
                             'config'];

// PUBISH DI MODULE
module.exports = {
    'reporter:mediawiki': ['type', MediawikiReporter]
};
