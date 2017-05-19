(function ($) {
    var defaults = {};

    $.fn.slider = function (options) {
        // var opts = $.extend(defaults, options);
        var $this = $(this);

        this.init = function() {
            $(this).append("<span class='ui-block' style='left:0%;'></span>");
        }

        $(document).delegate(".ui-block", "mousemove",function(e){
            var sliderWidth = $this.width();
            if(e.offsetX > 0 && e.offsetX < sliderWidth){
                            // console.log(e.offsetX + ", " + e.offsetY);
                var per = parseInt(e.offsetX/sliderWidth);
                console.log(per)
                $('.ui-block').css({
                    "left": per+"%"
                })
            }
        });

        this.init();
    };
})(jQuery);