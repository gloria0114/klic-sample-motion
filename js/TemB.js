$(document).ready(function () {
    $('.quick-menu').on('click', function () {
		$(this).toggleClass('active');
	});

    // 
    $('#fullpageWrap').fullpage({
        licenseKey: '5LJD7-8A8QK-1LAI9-M45L9-SNTVN',
        menu: '#fullpageMenu',
        anchors: ['section1', 'section2', 'section3', 'section4', 'footer'],
        navigation: false,
        verticalCentered: false,
        scrollingSpeed: 1000,
        css3: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        normalScrollElements: '.scroll'
    });

    $('.top').on('click', function (e) {
		e.preventDefault();
		$.fn.fullpage.moveTo(1);
	});
})