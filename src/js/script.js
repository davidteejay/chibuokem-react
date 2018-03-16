const $ = require('jquery');
// const Materialize = require('materialize-css');

$(function(){
    //modal
    // $('.modal').modal({
    //     opacity: 1,
    //     starting_top: '0%',
    //     ending_top: '0%',
    //     complete: function(){
    //         window.location.hash = "#!"
    //     }
    // });
    
    // let hash = window.location.hash;
    
    // if (hash === "#thanks"){
    //     $(hash).modal('open');
    // }
    
    // $('.parallax').parallax();
    
    // $('a.button-collapse').sideNav({
    //     menuwidth: '100%',
    //     closeOnClick: true,
    //     draggable: true,
    //     onOpen: () => {
    //         $('i.mdi-sort-variant').removeClass('mdi-sort-variant')
    //                                .addClass('mdi-close')
    //     },
    //     onClose: () => {
    //         $('i.mdi-close').removeClass('mdi-close')
    //                         .addClass('mdi-sort-variant')
    //     },
    //     inDuration: 600,
    //     outDuration: 600
    // })
    
    // //smooth scrolling on anchor link clicks
    // $(".link").on('click', (e) => {
    //     e.preventDefault();

    //     let loc = e.target.hash;

    //     $('html, body').animate({
    //         scrollTop: $(loc).offset().top
    //     }, 1000);
    // });

    // $(".next").on('click', () => {
    //     let hash = $(".next").data('where');

    //     $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, 1000);
    // });
    
    //testimonials slider
    // $('.slider').slider({
    //     interval: 4500,
    //     transition: 1000
	// });
    
    //animations
    // $('a.link').on('mouseenter', (e) => {
    //     e.preventDefault();

    //     e.target.classList.add('fill');
    // })

    // $('a.link').on('mouseleave', (e) => {
    //     e.preventDefault();

    //     e.target.classList.remove('fill');
    // })

    // $(window).scroll(() => {
    //     if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    //         $('.to-top').addClass('to-top-slideup').removeClass('to-top-slidedown');
    //     } else {
    //         $('.to-top').addClass('to-top-slidedown').removeClass('to-top-slideup');
    //     }    
    //     $(".slideanim").each(function(){
    //         let pos = $(this).offset().top;
    //         let winTop = $(window).scrollTop();
            
    //         if (pos < winTop + 600) {
    //             $(this).addClass("slideup");
    //         }
    //     });

    //     $(".slideanim2").each(function(){
    //         let pos = $(this).offset().top;
    //         let winTop = $(window).scrollTop();
            
    //         if (pos < winTop + 600) {
    //             $(this).addClass("slidedown");
    //         }
    //     });

    //     $(".slideanim3").each(function(){
    //         let pos = $(this).offset().top;
    //         let winTop = $(window).scrollTop();
            
    //         if (pos < winTop + 600) {
    //             $(this).addClass("slideright");
    //         }
	// 	});
		
	// 	$(".slideanim4").each(function(){
    //         let pos = $(this).offset().top;
    //         let winTop = $(window).scrollTop();
            
    //         if (pos < winTop + 600) {
    //             $(this).addClass("scaleup");
    //         }
    //     });
    // });
    
    // Skills percentage Countup
    // $('#skills .col .valign .right').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
	// 	if (visible) {
    //         let pos = $(this).offset().top;
    //         let winTop = $(window).scrollTop();
            
    //         if (pos < winTop + 600) {
    //             $(this).find('.timer').each(function () {
    //                 let $this = $(this);
    //                 $({ Counter: 0 }).animate({ Counter: $this.text() }, {
    //                     duration: 2000,
    //                     easing: 'swing',
    //                     step: function () {
    //                         $this.text(Math.ceil(this.Counter));
    //                     }
    //                 });
    //             });
    //             $(this).unbind('inview');
    //         }
	// 	}
	// });
    
    // let options = [
    //     { selector: '#social-menu', offset: 300, callback: function(el) {
    //         Materialize.showStaggeredList($(el));
    //     } 
    //     },
    //     { selector: "#social-menu2", offset: 300, callback:function(el){
    //         Materialize.showStaggeredList($(el));
    //     } 
    //     }
    // ];
    
    // Materialize.scrollFire(options);
});