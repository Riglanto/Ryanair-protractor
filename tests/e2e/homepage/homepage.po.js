"use strict";

var RyanairHomepage = function() {
    var departureInput = element.all(by.tagName('input')).get(6);
    var searchList = element(by.repeater('option in $ctrl.secondOptions track by option.id').row(0));
    var destinationInput = element.all(by.tagName('input')).get(8);

    var flyOutDayInput = element.all(by.model('date[0]')).get(0);
    var flyOutMonthInput = element.all(by.model('date[1]')).get(0);
    var flyOutYearInput = element.all(by.model('date[2]')).get(0);
    var flyBackDayInput = element.all(by.model('date[0]')).get(1);
    var flyBackMonthInput = element.all(by.model('date[1]')).get(1);
    var flyBackYearInput = element.all(by.model('date[2]')).get(1);

    var passengersButton = element(by.className('dropdown-handle'));
    var adultsButton = element.all(by.className('core-btn inc core-btn-wrap')).get(0);
    var childrenButton = element.all(by.className('core-btn inc core-btn-wrap')).get(2);
    var searchButton = element(by.className('col-flight-search-right')).all(by.tagName('button')).get(1);

    var familyPopup = element(by.className('promo-popup-benefits family'));

    var fligthsTable = element(by.className('flights-table'));
    var departureButton = element.all(by.className('flights-table-price__price')).get(0);
    var destinationButton = element.all(by.className('flights-table-price__price')).get(1);

    var fareSelectButton = element.all(by.id('continue')).get(0).element(by.xpath('..'));
    var continueButton = element(by.id('continue'));
    //element(by.className('core-btn-primary flight-selector__listing-footer-button-next'));

    var selectSeatsPopupButton = element(by.className('core-btn-primary same-seats ng-scope'));

    this.get = function() {
        browser.get('https://www.ryanair.com/ie/en/');
    };

    this.setDeparture = function(departure) {
        departureInput.clear();
        departureInput.sendKeys(departure);
        searchList.click();
    };

    this.setDestination = function(destination) {
        destinationInput.clear();
        destinationInput.sendKeys(destination);
        searchList.click();
    };

    this.setFlyOut = function(day, month, year) {
        flyOutDayInput.clear();
        flyOutDayInput.sendKeys(day);
        flyOutMonthInput.clear();
        flyOutMonthInput.sendKeys(month);
        flyOutYearInput.clear();
        flyOutYearInput.sendKeys(year);
    };

    this.setFlyBack = function(day, month, year) {
        flyBackDayInput.clear();
        flyBackDayInput.sendKeys(day);
        flyBackMonthInput.clear();
        flyBackMonthInput.sendKeys(month);
        flyBackYearInput.clear();
        flyBackYearInput.sendKeys(year);
    };

    this.setAdultsAndChildren = function(adults, children) {
        passengersButton.click();
        var i = 0;
        for (i = 0; i < adults - 1; ++i)
            adultsButton.click();
        for (i = 0; i < children; ++i)
            childrenButton.click();
    }

    this.search = function() {
        searchButton.click();
    }

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
        browser.manage().timeouts().implicitlyWait(5000);
        continueButton.click();
    }

    this.waitForSearchResults = function() {
        this.waitForVisible(departureButton);
    }

    this.waitForSelectSeats = function() {
        this.waitForVisible(selectSeatsPopupButton);
    }

    this.waitForVisible = function(object) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(object), 10000);
    }

    this.waitForEnabled = function(object) {
        browser.wait(object.isEnabled(), 10000);
    }
}

module.exports = RyanairHomepage;
