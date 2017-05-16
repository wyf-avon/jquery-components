(function ($) {
    var defaults = {
        title: "默认弹出框标题",
        content: "默认弹出框内容",
        width: "300", //弹出层宽度
        height: "auto", //弹出层高度
        zIndex: 99999, //弹出层层级
        hasMask: false, //TODO: 是否显示遮罩层
        hasBtn: false, //是否显示按钮
        confirmValue: null, //确认按钮文字
        confirm: function () {}, //确认回调
        cancelValue: null, //取消按钮文字
        cancel: function () {}, // 取消回调
        animation: '', //TODO: 动画效果：fade(默认)，。。。。
    };

    $.fn.dialog = function (options) {
        var _this = this;
        var opts = $.extend(defaults, options);
        var $this = $(this);

        _this.init = function () {
            var that = this;
            that.createDOM();
            that.setStyle();
            that.render(opts.title, opts.content);
            that.show();
        }

        _this.createDOM = function () {
            $(this).append("<div class='dialog-title'><h3></h3><i>×</i></div>");
            $(this).append("<div class='dialog-content'></div>");

            if(opts.hasBtn == true) {
                $(this).append("<div class='dialog-btn'></div>")
                if(opts.confirmValue){
                    $(".dialog-btn").append("<span class='dialog-btn-confirm'></span>")
                }
                if(opts.cancelValue){
                    $(".dialog-btn").append("<span class='dialog-btn-cancel'></span>")
                }
            }
        }

        _this.setStyle = function () {
            var $dialog = $(this),
                $title = $('.dialog-title'),
                $closeBtn = $('.dialog-title i'),
                $content = $('.dialog-content'),
                $dialogBtn = $('.dialog-btn'),
                $dialogBtnSpan = $('.dialog-btn span'),
                $mask = $('#dialog-mask');

            $dialog.css({
                "display": "none",
                "width": opts.width,
                "height": opts.height,
                "zIndex": opts.zIndex,
                "position": "fixed",
                "top": "30%",
                "left": "50%",
                "border": "1px solid #c5c5c5",
                "margin-left": -(opts.width+2+40) / 2,
                "padding": "0px 20px 20px",
                "border-radius":"3px"
            })

            $title.css({
                "position": "relative"
            })

            $closeBtn.css({
                "font-size": "24px",
                "cursor": "pointer",
                "font-style": "normal",
                "position": "absolute",
                "right": "0",
                "top": "0"
            })

            $content.css({
                "padding": "3px 12px"
            })

            $dialogBtn.css({
                "text-align": "end",
                "margin-top": "20px"
            })

            $dialogBtnSpan.css({
                "width": "90px",
                "height": "30px",
                "line-height": "30px",
                "text-align": "center",
                "display": "inline-block",
                "border-radius": "3px",
                "margin": "0 10px",
                "cursor": "pointer",
                "border": "1px solid #c5c5c5",
                "background": "#f6f6f6",
                "font-weight": "normal"
            })
        }

        _this.render = function (title, content) {
            var $title = $('.dialog-title h3'),
                $content = $('.dialog-content'),
                $confirm = $('.dialog-btn-confirm'),
                $cancel = $('.dialog-btn-cancel');

            $title.append(title);
            $content.append(content);
            $confirm.append(opts.confirmValue);
            $cancel.append(opts.cancelValue);
        }

        _this.show = function () {
            var $dialog = $(this);
            $dialog.css({
                "display": "block"
            })
        }

        _this.hide = function () {
            var $dialog = $(this);
            $dialog.css({
                "display": "none"
            })
            $dialog.empty();
        }

        $(this).on("click", ".dialog-title i", function () {
            _this.hide();
        });

        $(this).off("click", ".dialog-btn-confirm");  //on方法绑定事件后执行多次,解决：在每次绑定事件之前，要对该事件解绑
        $(this).on("click", ".dialog-btn-confirm", function () {
            opts.confirm();
        });

        $(this).on("click", ".dialog-btn-cancel", function () {
            opts.cancel();
            _this.hide();
        });

        _this.init();
    }
})(jQuery);