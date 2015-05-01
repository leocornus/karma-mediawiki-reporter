How Karma reporter works?
=========================

Some facts:

- Karma reporter has to be implemented as a Karma plugin.
- it has to follow the module name conversion as a Karma reporter.
  **karma-xx-reporter**
- it has to follow the export convention:
- DI, $inject variable.

Understand the base reporter
----------------------------

Basically answer the following question:

- How base reporter works?
- important methods / events
- important variables, summary metadata, 

:onRunStart:
  beginning of all tests..., 
  where you get ready for overall testing

:onBrowserStart:
  Beginning of the tests for a browser...,
  where you get ready for browser specific testing

:onSpecComplete(browser, result):
  complete each spec, a test suite, a js file, etc.
  where you print out the message for each spec.

:specSuccess, specSkipped, specFailure:
  will be called by **onSpecComplete** based on the result.

:onBrowserComplete:
  complete all tests of a browser, where you write the browser
  summary.

:onRunComplete:
  complete all tests, where you write overall summary

:renderBrowser"
  utility function to get ready the summary message for a browser.  
  it is normally used in function **onBrowserComplete**.

Code Memos
----------

function bind()
