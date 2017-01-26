"use strict";

var RyanairHomepage = require('./homepage.po.js');

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

        ryanairHomepage.waitForSearchResults();

        ryanairHomepage.selectDeparture();
        ryanairHomepage.selectDestination();

        ryanairHomepage.continueBooking();

        // ryanairHomepage.waitForSelectSeats();

        //ryanairHomepage.closeFamilyPopup();

        // browser.sleep(3000);
    });
});
