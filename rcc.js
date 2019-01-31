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
    $(document).scroll(function() {
        var scrollpos = $(document).scrollTop();
        var mldiv = Math.max(8.33,25-0.1*scrollpos)+'%';
        var mhdiv = Math.min(91.66,75+0.1*scrollpos)+'%';
        var mlwidth = Math.min(80,51+0.18*scrollpos)+'%';
        var mlmt = Math.max(0,20-0.12*scrollpos)+'px';
        var mhfsize = Math.max(50,80-0.18*scrollpos)+'px';
        var mhcopacity = Math.max(0,1-0.009*scrollpos);
        var mhspopacity = 0;
        if(scrollpos>119){
            mhspopacity = Math.min(1,0.017*scrollpos-1.94);
        }
        if(mhdiv=="86%"){
            console.log(mhfsize);
        }
        $(".mast-logo-div").css("width",mldiv);
        $(".mast-head-div").css("width",mhdiv);
        $(".mast-logo").css({
            "width":mlwidth,
            "margin-top":mlmt
        });
        $(".mast-head").css("font-size",mhfsize);
        $(".mhcollapse").css("opacity",mhcopacity);
        $(".mast-head-sp").css({
            "opacity": mhspopacity,
            "font-size": mhfsize
        });
        if(scrollpos>109 && st==3){
            st=2;
            $(".mhcollapse").css("display","none");
        }
        else if(scrollpos>119 && st==2){
            st=1;
            $(".mhcollapse").before("<span class='mast-head-sp' style='opacity:0'>Institute of Information Technology</span>");  
        }
        else if(scrollpos<121 && st==1){
            st=2;
            $(".mast-head-sp").remove();
            console.log("hello");
        }
        else if(scrollpos<111 && st==2){
            st=3;
            $(".mhcollapse").css("display","inline");
        }
        //<span class="mast-head-sp">Institute of Information Technology</span>
    });
    $(window).on('beforeunload',function(){
        $(window).scrollTop(0);
    });
});
