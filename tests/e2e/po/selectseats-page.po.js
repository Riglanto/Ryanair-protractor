"use strict";

var RyanairSeatsPage = function() {

    var selectSeatsPopupButton = element(by.className('seat-map-prompt mandatory-seats-prompt')).element(by.tagName('button'));
    var seatsList = element.all(by.className('seat-click ng-scope'));
    var seatsNextButton = element(by.className('core-btn-primary next ng-scope'));
    var sameSeatsButton = element(by.className('core-btn-primary same-seats ng-scope'));
    var confirmSeatsButton = element(by.className('core-btn-primary next ng-scope'));

    var noPriorityBoardingButton = element(by.className('core-btn-bb-outline ng-scope'));

    var checkoutButton = element(by.className('button-next')).all(by.tagName('button')).get(0);

    this.closeSelectSeatsPopup = function() {
        selectSeatsPopupButton.click();
    }

    this.pickSeats = function() {
        var selected = 0;
        seatsList.count().then(function(size) {
            for (var i = 15; i < size && selected < 3; ++i) {
                // if (seatsList.get(i).getCssValue('srcset').indexOf('reserved') == -1) {
                seatsList.get(i).click();
                selected++;
                // }
            }
        });
        seatsNextButton.click();
        sameSeatsButton.click();
        confirmSeatsButton.click();
    }

    this.closeSelectSeatsPopup = function() {
        selectSeatsPopupButton.click();
    }

    this.declinePriorityBoarding = function() {
        noPriorityBoardingButton.click();
    }

    this.checkout = function() {
        this.waitForEnabled(checkoutButton);
        checkoutButton.click();
    }

    this.waitForVisible = function(object) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(object), 20000);
    }

    this.waitForEnabled = function(object) {
        browser.wait(object.isEnabled(), 10000);
    }
}

module.exports = RyanairSeatsPage;
