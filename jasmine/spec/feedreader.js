/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 *
 * We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

	describe('RSS Feeds', function() {

		// Variable allFeeds is defined and not empty.
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		// Ensures each feed has a URL defined and URL is not empty.
		 it('have URLs that are defined and not empty', function() {
			allFeeds.forEach(function(thisFeed) {
				expect(thisFeed.url).toBeDefined();
				expect(thisFeed.url.length).toBeGreaterThan(0);
			});
		 });

		// Ensures each feed has a name defined and name is not empty.
		 it('have names that are defined and not empty', function() {
			allFeeds.forEach(function(thisFeed) {
				expect(thisFeed.name).toBeDefined();
				expect(thisFeed.name.length).toBeGreaterThan(0);
			});
		 });
	});


	describe('The menu', function() {

		// Ensures the menu element is hidden by default.
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		// Ensures menu changes visibility when menu icon is clicked.
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

		// When loadFeed() is done, there is at least a single .entry
		// element within the .feed container.
		it('contains at least one entry', function(done) {
			const numFeed = document.querySelectorAll('.feed .entry');

			expect(numFeed.length).toBeGreaterThan(0);
			done();
		});
	});


	describe('New Feed Selection', function() {

		var feed1, feed2;

		beforeEach(function(done) {
			$('.feed').empty();
			loadFeed(0, function() {
				feed1 = document.querySelector('.feed').innerText;
				loadFeed(1, function() {
					feed2 = document.querySelector('.feed').innerText;
					done();
				});
			});
		});

		// When a new feed is loaded by loadFeed() the content changes.
		 it('content changes when new feed is loaded', function() {
			expect(feed1).not.toBe(feed2);
		 });
	});

})();
