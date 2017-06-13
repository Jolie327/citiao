/**
 * Created by admin on 2017/6/10.
 */
// var $ = require("../lib/jquery-3.1.1");
// require("../lib/rem");
    var page = {
        init:function () {
            this.clickMenu();
            this.pageScroll();
        },
        //点击目录时，遮罩层目录出现
        clickMenu:function () {
            $(".menu").click(function () {
                $(".njl-shadow-main").show();
            });
            $(".shadow-left-list").click(function () {
                $(".njl-shadow-main").hide();
            })
            // 点击目录列表：
            $(".shadow-list-item").click(function () {
                $(".njl-shadow-main").hide();
                $(this).addClass("here").siblings().removeClass("here");
                var index = $(this).index();
                if(index==5){
                    return true;
                }else{
                    $(".main-list-flow>a").removeClass().eq(index).addClass("anchor");
                }
            })
        },
        //页面滚动时
        pageScroll:function () {
            $(window).scroll(function () {
                $(".main-list-flow>a").removeClass("anchor");
            })
        }
    };
    page.init();