"use strict";

var RyanairHomepage = require('./po/homepage.po.js');
var RyanairFaresPage = require('./po/selectfare-page.po.js');
var RyanairSeatsPage = require('./po/selectseats-page.po.js');

describe('Ryanair ticket service', function() {
    it('should reject payment due incorrect card details', function() {
        browser.manage().deleteAllCookies();

        var ryanairHomepage = new RyanairHomepage();
        ryanairHomepage.get();

        ryanairHomepage.setDeparture('WRO');
        ryanairHomepage.setDestination('DUB');

        ryanairHomepage.setFlyOut('01', '06', '2017');
        ryanairHomepage.setFlyBack('11', '06', '2017');

        ryanairHomepage.setAdultsAndChildren(2, 1);

        ryanairHomepage.search();

        var ryanairFaresPage = new RyanairFaresPage();
        ryanairFaresPage.waitForSearchResults();

        ryanairFaresPage.selectDestination();
        ryanairFaresPage.selectDeparture();

        ryanairFaresPage.continueBooking();

        var ryanairSeatsPage = new RyanairSeatsPage();
        ryanairSeatsPage.closeSelectSeatsPopup();

        ryanairSeatsPage.pickSeats();
        ryanairSeatsPage.checkout();

        browser.sleep(3000);
    });
});
