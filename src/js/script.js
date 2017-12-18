//eslint-disable-next-line

const $ = require('jquery');
const Materialize = require('materialize-css');

$(function(){
    $('.modal').modal({
        opacity: 1,
        starting_top: '0%',
        ending_top: '0%',
        complete: function(){
            window.location.hash = "#!"
        }
    });
    
    var hash = window.location.hash;
    
    if (hash === "#thanks"){
        $(hash).modal('open');
    }
    
    $('.parallax').parallax();
    
    //smooth scrolling on anchor link clicks
    $(".to-top").on('click', function(event){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500);
    });

    $(".next").on('click', () => {
        var hash = $(".next").data('where');

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000);
    })
    
    $('.slider').slider({
        interval: 4500,
        transition: 1000
	});
    
    //animations
    $(window).scroll(function(){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            $('.to-top').addClass('to-top-slideup').removeClass('to-top-slidedown');
        } else {
            $('.to-top').addClass('to-top-slidedown').removeClass('to-top-slideup');
        }

        $(".determinate").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(".html").addClass("flow-html");
                $(".css").addClass("flow-css");
                $(".js").addClass("flow-js");
                $(".python").addClass("flow-python");
                $(".php").addClass("flow-php");
            }
        });
    
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slideup");
            }
        });

        $(".slideanim2").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slidedown");
            }
        });

        $(".slideanim3").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slideright");
            }
		});
		
		$(".slideanim4").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("scaleup");
            }
        });
    });
    
    // Skills percentage Countup
    $('#skills .col .valign .right').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
		}
	});
    
    var options = [
        { selector: '#social-menu', offset: 300, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } 
        },
        { selector: "#social-menu2", offset: 300, callback:function(el){
            Materialize.showStaggeredList($(el));
        } 
        }
    ];
    
    Materialize.scrollFire(options);
});