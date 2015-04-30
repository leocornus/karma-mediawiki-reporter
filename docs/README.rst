
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
- how to register as a Karma plugin?
- how to load the plugin?
- how to test the reporter plugin?

Now let's start from a very simple reporter.
