$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get",
        success:function(res){
            $("<link rel='stylesheet' href='./css/header.css'>").appendTo("head");
            $(res).replaceAll("#header");
            $a=$(".myheader>.container>div.right_mu>a");
            console.log($a);
            $div=$(".myheader>.container>.list2");
            $a.on("click",function(){
                $div.toggleClass("hidden");
            })
            $header=$(".myheader");
            var banofftop=$header.offset().top+1;
            var scTop=0;
            $(document).scroll(function(){
                scTop=$(this).scrollTop();
                if(scTop>=banofftop){
                    $header.addClass("myheader-float");
                    $img=$(".myheader-float>.container>div.right_mu>a>img");
                    $img.attr("src","./image/index/menua2.png");
                }else{
                    $header.removeClass("myheader-float");
                    $img=$(".myheader>.container>div.right_mu>a>img");
                    $img.attr("src","./image/index/menua.png");
                }
            })
        }
    })
})