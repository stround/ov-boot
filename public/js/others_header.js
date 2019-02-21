$(function(){
  $.ajax({
      url:"http://127.0.0.1:3000/header.html",
      type:"get",
      success:function(res){
          $("<link rel='stylesheet' href='./css/header.css'>").appendTo("head");
          $(res).replaceAll("#header");
          $a=$(".myheader>.container>div.right_mu>a");
          $div=$(".myheader>.container>.list2");
          $a.on("click",function(){
              $div.toggleClass("hidden");
          })
          $header=$(".myheader");
          var banofftop=$header.offset().top+1;
          if(banofftop==1){
            $header.addClass("myheader_others");
          }
          var scTop=0;
          $(document).scroll(function(){
              scTop=$(this).scrollTop();
              if(scTop==0){
                $header.addClass("myheader_others");
              }
              if(scTop>=banofftop){
                  $header.addClass("myheader-float");
                  $header.removeClass("myheader_others");
                  $img=$(".myheader-float>.container>div.right_mu>a>img");
                  $img.attr("src","./image/index/menua2.png");
              }else{
                  $header.removeClass("myheader-float");
                  $img=$(".myheader>.container>div.right_mu>a>img");
                  $img.attr("src","./image/index/menua3.png");
              }
          })
      }
  })
})