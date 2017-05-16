(function ($) {
    var defaults = {};

    $.fn.tabs = function (options) {
        var _this = this;
        var opts = $.extend(defaults, options);

        _this.init = function () {
            _this.display(0);
        }

        _this.reset = function() {
            $($(".content").children("div")).css({
                "display": "none"
            })

            $($(".list").children("li")).css({
                "background-color": "#f6f6f6"
            })
        }

        _this.display = function (pos) {
            $($(".content").children("div").get(pos)).css({
                "display": "block"
            })

            $($(".list").children("li").get(pos)).css({
                "background-color": "#007fff"
            })
        }

        $(this).on("click", ".list li", function () {
            var index = $(this).index();
            _this.reset();
            _this.display(index);
        });

        _this.init();
    };
})(jQuery);