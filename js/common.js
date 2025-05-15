$(function () {
    reactTab_main()
    menuDepth02()
    reactTab_nav()

    // nav depth01 
    $(document).on('click', 'nav .tabWrap .depth01 > li > a', function (e) {
        let target = $(this.hash);

        $(this).addClass('on').parent('li').siblings().find('a').removeClass('on');
        $(target).addClass('open').siblings().removeClass('open');
        e.preventDefault();
    });

    // nav depth02
    function menuDepth02() {
        $('nav .tabWrap .depth02 > li > a').on('click', function (e) {
            let dep03Length = $(this).siblings('.depth03').length;

            if (dep03Length > 0 === true) {
                if ($(this).hasClass('open')) {
                    $(this).undind('click').click();
                } else {
                    e.preventDefault();
                }

                $(this).toggleClass('open').parent('li').siblings().find('a').removeClass('open');
                $(this).siblings('ul').slideToggle().parent('li').siblings().find('.depth03').slideUp();
            }
        });

        $('nav .tabWrap .depth02 > li').find(' > a').each(function () {
            let dep03Length = $(this).siblings('.depth03').length;
            if (dep03Length > 0 === true) {
                $(this).addClass('dep');
                $(this).append("<div class='toggleIcon'><span></span></div>");

            }
        });
    }     

    // mian container
	$(document).on('click', '.mainWrap .titTab ul > li > a', function(e){
		let target = $(this.hash);

		$(this).addClass('on').parent('li').siblings().find('a').removeClass('on');
        $(this).parent('li').prev('li').addClass('lineOff').siblings('li').removeClass('lineOff');
		$(target).addClass('open').siblings().removeClass('open');
		e.preventDefault();
	});

    // btnTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height() * 0.3) {
            $('.btnTop').fadeIn();
        } else {
            $('.btnTop').fadeOut();
        }
    });
    $('.btnTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});


// ================================ 반응형 메인 탭 ================================
function reactTab_main(){
	let $tab = $('.mainWrap .titTab');

	$(window).resize(function() {
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		},100 );
	}).resize();
	
	$(window).on('resizeEnd', function() {
		$tab.each(function(){
			if($(window).width() < 769){
				$(this).addClass('reactTab');
                let resizeTabText = $(this).find('ul > li > a.on').text();
                $(this).children('.selectBtn').text(resizeTabText);
			}else{
				$(this).removeClass('reactTab').find('> ul').removeAttr('style');
			}
		});
	});

	$(document).on('click', '.mainWrap .reactTab > a.selectBtn', function (e) {
		let $tabBox = $(this).next('ul');
		$tabBox.slideToggle(300);
		return false;
	});

    $(document).on('click', '.mainWrap .titTab > ul > li > a', function (e) {
        let tabText = $(this).text()
        $($tab).find(' > .selectBtn').text(tabText)
    });

    $(document).on('click', '.mainWrap .titTab.reactTab > ul > li > a', function (e) {
        $(this).parent().parent('ul').slideToggle(300)
        return false;
    });

    $(document).click(function (e){
        if($('.mainWrap .titTab.reactTab > ul').has(e.target).length === 0){
            $('.mainWrap .titTab.reactTab > ul').slideUp(300);
        }
      });
}

// ================================ 반응형 nav ================================
function reactTab_nav(){
	let $Navtab = $('nav .tabWrap > .titTab');

	$(window).resize(function() {
		this.resizeTO = setTimeout(function() {
			$(this).trigger('resizeEnd');
		},100 );
	}).resize();
	
	$(window).on('resizeEnd', function() {
		$Navtab.each(function(){
			if($(window).width() < 769){
				$(this).addClass('reactTab');
                let resizeTabText = $(this).find('ul > li > a.on').text();
                $(this).children('.selectBtn').text(resizeTabText);
			}else{
				$(this).removeClass('reactTab').find('> ul').removeAttr('style');
			}
		});
	});

	$(document).on('click', 'nav .reactTab > a.selectBtn', function (e) {
		let $tabBox = $(this).next('ul');
		$tabBox.slideToggle(300);
		return false;
	});

    $(document).on('click', 'nav .titTab > ul > li > a', function (e) {
        let tabText = $(this).text()
        $($Navtab).find(' > .selectBtn').text(tabText)
    });

    $(document).on('click', 'nav .titTab.reactTab > ul > li > a', function (e) {
        $(this).parent().parent('ul').slideToggle(300)
        return false;
    });

    $(document).click(function (e){
        if($('nav .titTab.reactTab > ul').has(e.target).length === 0){
            $('nav .titTab.reactTab > ul').slideUp(300);
        }
      });
      
}
