$(document).ready(function(){
    var navtoggle=1;
    var st=3;
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
    if($(window).width()<1024){
        $(".na").css("display","block");
        $(".nab").css("display","none");
    }
    else{
        $(".nab").css("display","block");
        $(".na").css("display","none");
    } 
    $(window).resize(function(){
       if($(window).width()<1024){
           $(".na").css("display","block");
           $(".nab").css("display","none");
       }
       else{
           $(".nab").css("display","block");
           $(".na").css("display","none");
       } 
    });
    /*$(document).scroll(function() {
        var scrollpos = $(document).scrollTop();
        var mlwidth = Math.max(4,20-0.06*scrollpos)+'%';
        
    });
    $(window).on('beforeunload',function(){
        $(window).scrollTop(0);
    });*/
});
