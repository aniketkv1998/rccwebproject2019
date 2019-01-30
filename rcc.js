$(document).ready(function(){
    //console.log($(window).scrollTop());
    var navtoggle=1;
    $('#more-btn').click(function(){
        if(navtoggle==1){
            navtoggle=0;
            var i=1,j;
            for(j=1;j<151;j=j+15){
                i=(i-0.1).toFixed(1);
                timer(i,j);
            }
            setTimeout(function(){
                if(j==151){
                    $("#secondary-nav").css("z-index","1");
                    $(".more-navbar").css("z-index","2");
                }
            },161);
        }
        else{
            navtoggle=1;
            $("#secondary-nav").css("z-index","2");
            $(".more-navbar").css("z-index","1");
            var i=0,j;
            for(j=1;j<151;j=j+15){
                i=i+0.1;
                timer(i,j);
            }
        }
        function timer(i,j){
            setTimeout(function(){$("#secondary-nav").css("opacity",i);},j);    
        }
    });
    $(window.document).scroll(function() {
        //console.log($(window.document).scrollTop());
        var fsize = Math.max(80,150-0.165*$(window.document).scrollTop())+'px';
        var alsize = Math.max(45,87-0.1*$(window.document).scrollTop())+'%';
        var alml = Math.min(200,30+0.4*$(window.document).scrollTop())+'px';
        //console.log(alml);
        $(".about-head").css("font-size",fsize);
        $(".about-logo").css({
            "width":alsize,
            "margin-left":alml
        });
    });
    $(window).on('beforeunload',function(){
        $(window).scrollTop(0);
    });
});