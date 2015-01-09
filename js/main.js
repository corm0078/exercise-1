var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $spaceShipSec = $('.spaceship-1-section');
var $spaceShip = $('.spaceship-1');
var $spaceShipSec2 = $('.spaceship-2-section');
var $spaceShip2 = $('.spaceship-2');

$win.on('scroll', function () {
    var scrollPos =$win.scrollTop();
    
    $sun.css('transform', 'rotate(' + scrollPos / 2 + 'deg)');
    $sunSection.css('background-position', 'center ' + scrollPos / 3 + 'px')
});

$dipperSection.waypoint(function () {
    $dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$spaceShipSec2.waypoint(function () {
    $spaceShip2.addClass('js-spaceship-2-fade');
}, { offset: '70%' });