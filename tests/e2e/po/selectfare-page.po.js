"use strict";

var SelectFaresPage = function() {
    var familyPopup = element(by.className('promo-popup-benefits family'));

    var fligthsTable = element(by.className('flights-table'));
    var departureButton = element.all(by.className('flights-table-price__price')).get(0);
    var destinationButton = element.all(by.className('flights-table-price__price')).get(1);

    var fareSelectButton = element.all(by.id('continue')).get(0).element(by.xpath('..'));
    var continueButton = element(by.id('continue'));

    this.closeFamilyPopup = function() {
        familyPopup.click();
    }

    this.selectDeparture = function() {
        departureButton.click();
        this.waitForEnabled(fareSelectButton);
        fareSelectButton.click();
    }

    this.selectDestination = function() {
        destinationButton.click();
        this.waitForEnabled(fareSelectButton);
        fareSelectButton.click();
    }

    this.continueBooking = function() {
        continueButton.click();
    }

    this.waitForSearchResults = function() {
        this.waitForVisible(departureButton);
    }

    this.waitForVisible = function(object) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(object), 20000);
    }

    this.waitForEnabled = function(object) {
        browser.wait(object.isEnabled(), 10000);
    }
}

module.exports = SelectFaresPage;
