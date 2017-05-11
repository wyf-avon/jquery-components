/*  based on jQuery 3.2
    html format:
    <div class="ui-widget">
        <input id="tags" type="text">
    </div>
    <ul id="content"></ul>
*/

(function ($) {
    var defaults = {
        source: [], //必填，自动补全的信息来源
        content: "" //必填，suggestion的id名字
    };

    $.fn.suggestion = function (options) {
        var $this = $(this);
        var opts = $.extend(defaults, options); //使用jQuery.extend 覆盖插件默认参数

        $this.keyup(function () {
            var val = $this.val();
            if (val != "" && val.length != 0) {
                var result = [];

                for (var i = 0; i < opts.source.length; i++) {
                    if (opts.source[i].indexOf(val) != -1) {
                        result.push(opts.source[i]);
                    }
                }

                $(opts.content).empty();

                $(opts.content).css({
                    "position": "absolute",
                    "top": $(".ui-widget").offset().top + $(".ui-widget").height(),
                    "left": $this.offset().left,
                    "width": $this.css("width")
                })
                $(opts.content).css("display", "block");

                for (var m = 0; m < result.length; m++) {
                    $(opts.content).append("<li>" + result[m] + "</li>")
                }

            } else {
                $(opts.content).css("display", "none");
                $(opts.content).empty();
            }
        });

        $(opts.content).click(opts.content + " li", function (e) {
            var list = e.target.outerText;
            $this.val(list);
            $(opts.content).empty();
            $(opts.content).css("display", "none");
        });

    };
})(jQuery);