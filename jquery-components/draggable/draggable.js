(function ($) {
    var defaults = {};

    $.fn.draggable = function (options) {
        // var opts = $.extend(defaults, options);

        var move = false; //移动标记，标识控件是否移动    
        var _x, _y; //鼠标离控件左上角的相对位置，等于鼠标在控件坐标下的位置
        $(".drag").mousedown(function (e) {
            move = true;
            _x = e.pageX - parseInt($(".drag").css("left"));  
            _y = e.pageY - parseInt($(".drag").css("top"));
        });
        $(document).mousemove(function (e) {
            if (move) {
                var x = e.pageX - _x; //鼠标移动后，控件左上角到屏幕左上角的相对位置  
                var y = e.pageY - _y;
                $(".drag").css({
                    "top": y,
                    "left": x
                });
            }
        }).mouseup(function () {
            move = false;
        });
    };
})(jQuery);