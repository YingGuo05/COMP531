// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var XMLReporter = require('ruru-protractor-junit-reporter');
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine2',
  resultJsonOutputFile : 'my-protractor-e2e-results.json',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
   
    
  },
  afterLaunch : function (exitCode) {
    return new Promise(function (resolve) {

        var reporter = new XMLReporter({
            title : 'My Protractor End to End Results',
            xmlReportDestPath : 'reportDestinationFolder/protractor-e2e-report.xml'
        });

        reporter.generateXMLReport(exports.config.resultJsonOutputFile);
    });
}
  
};


