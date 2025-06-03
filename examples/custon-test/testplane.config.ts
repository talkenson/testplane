import { ConfigInput } from "../../src";

export default {
    gridUrl: "local",
    baseUrl: "http://localhost",
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    sets: {
        desktop: {
            files: [
                "testplane-tests/**/*.testplane.(t|j)s",
            ],
            browsers: [
                // "chrome_cdp",
                "firefox_chr",
                // "firefox_old"
            ],
        },
    },
    browsers: {
        // chrome: {
        //     headless: true,
        //     desiredCapabilities: {
        //         browserName: "chrome",
        //     }
        // },
        chrome_cdp: {
            headless: true,
            automationProtocol: "devtools",
            desiredCapabilities: {
                browserName: "chrome",
                "goog:chromeOptions": {
                    binary: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome",
                    // args: ["--remote-debugging-port=9222"],
                },
            },
        },
        firefox_chr: {
            headless: true,
            // automationProtocol: "devtools",
            desiredCapabilities: {
                browserName: "firefox",
                // "moz:firefoxOptions": {
                //     // binary: "/Applications/Firefox.app/Contents/MacOS/firefox",
                //     // args: ["-remote-debugging-port 9222"],
                //     // args: [""],
                // },
            },
        },
        // firefox: {
        //     headless: true,
        //     automationProtocol: 'devtools',
        //     desiredCapabilities: {
        //         browserName: "firefox",
        //         'moz:firefoxOptions': {
        //             args: ['-remote-debugging-port 9222']
        //         }
        //     }
        // },
        // firefox_old: {
        //     headless: true,
        //     automationProtocol: 'devtools',
        //     desiredCapabilities: {
        //         browserName: "firefox",
        //         browserVersion: "110.0",
        //         'moz:firefoxOptions': {
        //             args: ['-remote-debugging-port 9222']
        //         },
        //     }
        // }
    },
    plugins: {
        "html-reporter/testplane": {
            // https://github.com/gemini-testing/html-reporter
            enabled: true,
            path: "testplane-report",
            defaultView: "all",
            diffMode: "3-up-scaled",
        },
    },
} as ConfigInput;
