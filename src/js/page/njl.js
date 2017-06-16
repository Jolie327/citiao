/**
 * Created by admin on 2017/6/10.
 */
var $ = require("../lib/jquery-3.1.1");
require("../lib/rem");
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
            });
            // 点击目录列表：
            // 方法一：锚点
            // $(".shadow-list-item").click(function () {
            //     $(".njl-shadow-main").hide();
            //     $(this).addClass("here").siblings().removeClass("here");
            //     var index = $(this).index();
            //     if(index==5){
            //         return true;
            //     }else{
            //         $(".main-list-flow>a").removeClass().eq(index).addClass("anchor");
            //     }
            // })
            // 方法二：老式SPA
            // $(".shadow-list-item").click(function () {
            //     $(".njl-shadow-main").hide();
            //     $(this).addClass("here").siblings().removeClass("here");
            //     var index = $(this).index();
            //     var anchor = $(this).data("anchor");
            //     window.location.hash=anchor;  //改变地址栏
            //     $(".main-list-flow>.njl-list-item").hide().eq(index).show();//应用场景变换
            //     window.onhashchange=function () {  //用户翻页时触发此方法
            //         var gethash = location.hash;  //获取翻页后地址
            //         var nowstatus = gethash.substr(1);  //处理获取到的地址
            //         $(".main-list-flow>.njl-list-item").each(function () { //变换对应场景
            //             if($(this).data("anchor")==nowstatus){
            //                 $(this).show();
            //             }else{
            //                 $(this).hide();
            //             }
            //         });
            //     $(".shadow-list>a").each(function () {
            //         if($(this).data("anchor")==nowstatus){
            //             $(this).addClass("here").siblings().removeClass("here");
            //         }
            //     })
            //     }
            // });
            // 方法三：新式SPA
            $(".shadow-list-item").click(function () {
                $(".njl-shadow-main").hide();
                $(this).addClass("here").siblings().removeClass("here");
                var index = $(this).index();
                var anchor = $(this).data("anchor");
                history.pushState({state:anchor},null,anchor);  //改变地址栏
                $(".main-list-flow>.njl-list-item").hide().eq(index).show();  //应用场景变换
                window.onpopstate = function () {
                    var gethash = history.state;  //获取翻页后新地址  这是一个对象
                    var nowstatus = gethash.state;  //处理新地址
                    $(".main-list-flow>.njl-list-item").each(function () { //变换对应场景
                        if($(this).data("anchor")==nowstatus){
                            $(this).show();
                        }else{
                            $(this).hide();
                        }
                    });
                    $(".shadow-list>a").each(function () {
                        if($(this).data("anchor")==nowstatus){
                            $(this).addClass("here").siblings().removeClass("here");
                        }
                    })
                }
            })
        },
        //页面滚动时
        pageScroll:function () {
            $(window).scroll(function () {
                // 配合方法一：
                // $(".main-list-flow>a").removeClass("anchor");
            })
        }
    };
    page.init();