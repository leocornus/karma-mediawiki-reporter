
Steps to build a karma reporter plugin.

#. create a git repository karma-mediawiki-reporter.
#. init npm package.
#. setup testing by using karma.
#. enable travis-ci for this repository
#. setup travis-ci integration.
#. start karma plugin development

travis integration
------------------

need the following before script on file **.travis.yml**::

  before_script:
    - export DISPLAY=:99.0
    - sh -e /etc/init.d/xvfb start

karma plugin development
------------------------

Questions:

- how to extend the base karma reporter?

how to register as a Karma plugin?

- develop it as as regular npm package with name:
  **karma-mediawiki-reporter**.
  the module name need following the `karma plugin name convention`_.

how to load the plugin?

- add pakcage name to **devDependencies** in **package.json**, 
  we don't need
  this package on production, it is only for testin purpose.
- add package name to **plugins** list in file **karma.conf.js**.
- add **mediawiki** in the **reporters** list in karma config file.


how to test the reporter plugin?
--------------------------------

We will create a dummy npm module to test this reporter.
Here are steps:

- create the dummy npm module on test folder.
- load karma and karma-jasmine for testing specs.
- set up script to execute karma
- set up prekarma script to copy the latest reporter js code to
  node_modules folder.

Here is a sample for the scripts::

  "scripts": {
    "test": "npm run karma",

    "prekarma": "cp -v ../*.j* node_modules/karma-mediawiki-reporter",
    "karma": "node node_modules/karma/bin/karma start karma.conf.js"
  },

Now let's start from a very simple reporter.

.. _karma plugin name convention: http://karma-runner.github.io/0.12/dev/plugins.html
