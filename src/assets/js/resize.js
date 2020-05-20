

    /* 自适应js */
    var zoomO = 1000/2160,
          ddw = document.documentElement.clientWidth,
          ddh = document.documentElement.clientHeight,
          zoomNow = ddw/ddh,
          zoomNum = 1;

        function ResizeChat(){
            if(zoomNow>zoomO){
              var newW = 1000*ddh/2160;

              zoomNum = newW/1000;
            }
            else{
              var newH = 2160*ddw/1000;

              zoomNum = newH/2160;
            }
            $('html').css('font-size',625*zoomNum+'%');
        }
        ResizeChat();
    $(window).resize(function(event) {
       var zoomO = 1000/2160,
          ddw = document.documentElement.clientWidth,
          ddh = document.documentElement.clientHeight,
          zoomNow = ddw/ddh,
          zoomNum = 1;

        function ResizeChat(){
            if(zoomNow>zoomO){
              var newW = 1000*ddh/2160;

              zoomNum = newW/1000;
            }
            else{
              var newH = 2160*ddw/1000;

              zoomNum = newH/2160;
            }
            $('html').css('font-size',625*zoomNum+'%');
        }
        ResizeChat();

    });
    /* 自适应js end */

