(function ($) {
    $.fn.tabs = function (options) {
        var me = this;

        //使用鼠标移动触发，亦可通过click方式触发页面切换  
        var defualts = {
            switchingMode: "mousemove"
        };

        //融合配置项  
        var opts = $.extend({}, defualts, options);

        //DOM容器对象，类似MX框架中的$e  
        var $e = $(this);

        //选中的TAB页索引  
        var selectedIndex = 0;

        //TAB列表  
        var $lis;

        //PAGE容器  
        var aPages = [];


        //初始化方法  
        me.init = function () {

            //给容器设置样式类  
            $e.addClass("tabsDiv");

            $lis = $("ul li", $e);

            //设置TAB头的选中和非选中样式  
            $lis.each(function (i, dom) {
                if (i == 0) {
                    $(this).addClass("tabsSeletedLi")
                } else {
                    $(this).addClass("tabsUnSeletedLi");
                }

            });

            //$("ul li:first", $e).addClass("tabsSeletedLi");  
            //$("ul li", $e).not(":first").addClass("tabsUnSeletedLi");  
            //$("div", $e).not(":first").hide();  

            //TAB pages绑定  
            var $pages = $('div', $e);
            $pages.each(function (i, dom) {
                if (i == 0) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

                aPages.push($(this));
            });



            //绑定事件  
            $lis.bind(opts.switchingMode, function () {
                var idx = $lis.index($(this))
                me.selectPage(idx);
            });

        }


        /**  
         *  选中TAB页  
         *  
         */
        me.selectPage = function (idx) {
            if (selectedIndex != idx) {
                $lis.eq(selectedIndex).removeClass("tabsSeletedLi").addClass("tabsUnSeletedLi");
                $lis.eq(idx).removeClass("tabsUnSeletedLi").addClass("tabsSeletedLi");

                aPages[selectedIndex].hide();
                aPages[idx].show();
                selectedIndex = idx;
            };
        }


        me.showMsg = function () {
            alert('WAHAHA!');
        }

        //自动执行初始化函数  
        me.init();

        //返回函数对象  
        return this;
    };
})(jQuery);