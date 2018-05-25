$(document).ready(function() {

    //Cycles for next image
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);        
        }else {
            currentImg.removeClass('active').css('z-index', -10);
            $(".slider-inner img:first-child").addClass('active').css('z-index', 10);
        }
    });

    //cycles for prev img
    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $(".slider-inner img:last-child").addClass('active').css('z-index', 10);
        }
    });

    

});