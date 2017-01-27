"use strict";

var SelectFaresPage = function() {
    var familyPopup = element(by.className('promo-popup-benefits family'));

    var fligthsTable = element(by.className('flights-table'));
    var departureButton = element.all(by.className('flights-table-price__price')).get(0);
    var destinationButton = element.all(by.className('flights-table-price__price')).get(1);

    var fareSelectButton = element.all(by.id('continue')).get(0).element(by.xpath('..'));
    var continueButton = element(by.id('continue'));

    var selectSeatsPopupButton = element(by.className('seat-map-prompt mandatory-seats-prompt')).element(by.tagName('button'));
    // var selectSeatsPopupButton = element(by.className('core-btn-primary same-seats ng-scope'));

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

    this.waitForSelectSeats = function() {
        // browser.ignoreSynchronization = true;
        // browser.sleep(5000);
        // this.waitForVisible(selectSeatsPopupButton);
        browser.wait(function() {
            return selectSeatsPopupButton.isPresent();
        }, 60000);
    }

    this.closeSelectSeatsPopup = function() {
        selectSeatsPopupButton.click();
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
