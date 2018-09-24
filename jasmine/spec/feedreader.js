/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    describe('RSS Feeds', function() {

        /* Tests to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have URLs that are defined and not empty', function() {
            let i = 0;
            allFeeds.forEach(function() {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
                i++;
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have names that are defined and not empty', function() {
            let i = 0;
            allFeeds.forEach(function() {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
                i++;
            });
         });

    });


    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('toggles visibility when clicked', function () {
              const menuIcon = $('.menu-icon-link');

              menuIcon.trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(false);
              menuIcon.trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });


    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Since loadFeed() is asynchronous, test will require use of
         * Jasmine's beforeEach and asynchronous done() function.
         */
         it('contains at least one entry', function(done) {
             const numFeed = document.querySelectorAll('.feed .entry');

             expect(numFeed.length).toBeGreaterThan(0);
             done();
         });
     });


    describe('New Feed Selection', function() {
        var entry1, entry2;

        beforeEach(function(done) {
            $('.feed').empty();

            loadFeed(0, function() {
                entry1 = document.querySelector('.feed').innerText;
            });
            loadFeed(1, function() {
                entry2 = document.querySelector('.feed').innerText;
                done();
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
         it('content changes when new feed is loaded', function() {
            expect(entry1).not.toBe(entry2);
         });
    });

}());
