"use strict";
function myFunction(){
    document.documentElement.scrollTop = 0;
    if(window.scrollTop>1600){
        $('#arrow').show();
    }
    else{
        $('#arrow').hide();
    }

}

$(document).ready(function(){
    $('nav ul li a').click(function(){
        if($('nav ul li a').hasClass('active')){
            $('nav ul li a').removeClass('active');
            $(this).addClass('active');
        }
    })
    $('#circle1').click(function(){
    $(this).addClass('active1')
    $('#span1').show(1000);
    $('#span2').hide(1000);
    $('header').fadeOut(10);
    $('header').fadeIn(10);
    $('#circle2').removeClass('active1')
    })
    $('#circle2').click(function(){
    $(this).addClass('active1')
    $('#span1').hide(1000);
    $('#span2').show(1000);
    $('header').fadeOut(10);
    $('header').fadeIn(10);
    $('#circle1').removeClass('active1')

    })
    $(document).on('mouseover', 'nav li', function() {
        $(this).addClass('active');
    });
    $(document).on('mouseout', 'nav li', function() {
        $(this).removeClass('active');
    });





    var scroll = $(window).scrollTop();
    var section1 = $('.section1').offset().top;
    var section2 = $('.section2').offset().top;
    var section3 = $('.section3').offset().top;
    $('nav li').click(function() {
        var gotosection = ".s" + $(this).attr('id');
        $('html').animate({
            scroll: $(gotosection).offset().top
        }, 1000);
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('nav').css("background-color","rgba(0, 100, 87, 0.5)");
        } else {
            $('nav').css("background-color","rgba(0, 0, 0, 0.5)");
        }
    });
    $('.mainul li').mouseover(function(){
        $(this).css({
            color: 'white',
            cursor: 'pointer',
            backgroundColor: 'rgb(0, 151, 33)',
            borderRadius: '10px',
            transition: "0.1s all" ,
        })
    })
    
    $('.mainul li').mouseout(function(){
        $(this).css({
            color: 'black',
            backgroundColor: 'white',
            cursor: 'pointer',
            borderRadius: '10px',
            transition: "0.1s all" ,
        })
        $(this ,'a').css({
            color: 'black',

        })
    })
    $('.li-a').click(function(){
        if($('.li-a').hasClass('active001')){
            $('.li-a').removeClass('active001');
            $(this).addClass('active001');
        }
    })


        $({counter: 0}).animate({counter: 3200}, {
                duration:1000,
                step:function(){
                    $('.number').text(Math.ceil(this.counter))
                }
            })
        
        
            $({counter: 0}).animate({counter: 120}, {
                duration:1000,
                step:function(){
                    $('.number1').text(Math.ceil(this.counter))
                }
            })
        
        
        
            $({counter: 0}).animate({counter: 360}, {
                duration:1000,
                step:function(){
                    $('.number2').text(Math.ceil(this.counter))
                }
            })

            $({counter: 0}).animate({counter: 6454}, {
                duration:1000,
                step:function(){
                    $('.number3').text(Math.ceil(this.counter))
                }
            })
            $('.cont').hide()
            $(document).on("click" ,".img-fluid" ,function(){
                $('.cont').fadeIn(200)
                var imageUrl = $(this).attr('src');
                $('.cont img').attr('src', imageUrl)

            })
            $('.cont span').click(function(){
                $('.cont').fadeOut(200)
            })
            
            
            

            $(window).scroll(function(){
                $('.sections').each(function(){
                    var x = $(window).scrollTop() +  $(window).height() ;   

                    var y = $(this).offset().top + $(this).height() / 2;
                    if(x >= y){
                        $(this).addClass('active-2')
                    }
                })
            })
            const lang = document.querySelector('.lang-container')
            const link = document.querySelectorAll('a')

            const title = document.query

})