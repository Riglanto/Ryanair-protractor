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
}

module.exports = RyanairHomepage;
