import pageObjectMap from '../support/pageObjectMap.js'
import chai from "chai";
const assert = chai.assert

module.exports = function() {
    'use strict';

    let currentPage = new pageObjectMap['LoginPage'];

    this.Then(/^I login with user "([^"]*)" and password "([^"]*)"$/, function (user, password) {
        return currentPage.login(user, password);
    });


    this.Then(/^I validate app functions$/, function () {

    });

    this.Then(/^I validate timezone functions$/, function () {

        if (browser.isAndroid) {
            let deviceTimezone = browser.perfGetTimezone()
            let timezone = "Asia/Jerusalem"
            browser.perfSetTimezone(timezone)
            // let assertMethod = () => assert.equal(deviceTimezone, timezone, `Device Location ${deviceTimezone} should be equal to ${timezone}`)
            // return browser.perfReportVerify(assertMethod)
            browser.perfVerifyTimezone(timezone)
            browser.perfResetTimezone()
            browser.perfAssertTimezone(deviceTimezone)
        } else {

            browser.perfReportComment('Not supported for this platform')
        }
    });

    this.Then(/^I validate location functions$/, function () {

        if (browser.isAndroid) {
            let deviceLocation = browser.perfGetDeviceLocation()
            let coordinates = "90.0,90.0"
            browser.perfSetLocation(coordinates, "coordinates")
            browser.perfAssertLocation(coordinates)
            browser.perfResetLocation()
            browser.pause()
           // browser.perfVerifyLocation(deviceLocation)


        } else {

            browser.perfReportComment('Not supported for this platform')
        }
    });

    this.Then(/^I validate visual functions$/, function () {


        let title = 'Perfecto'
        let logo = 'PUBLIC:TestApplication/Images/logo.png'

        browser.perfWaitForPresentImageVisual(logo, 5)
        browser.perfFindImage(logo, 5)
        browser.perfAssertVisualImage(logo, 5)
        browser.perfVerifyVisualImage(logo)
        browser.perfWaitForPresentTextVisual(title, 5)
        browser.perfFindText(title, 5)
        browser.perfAssertVisualText(title)
        browser.perfVerifyVisualText(title)

    });


}
