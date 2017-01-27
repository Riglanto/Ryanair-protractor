exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        './tests/e2e/**/*.spec.js'
    ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    },
};
