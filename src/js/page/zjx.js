/**
 * Created by admin on 2017/6/10.
 */
var $=require('../lib/jquery-3.1.1.js');
var page={
    init:function(){
        this.cardList();
        this.goTop();
    },
    //Ä¿Â¼
    cardList:function(){

            $('.mn-can').click(function(){
                $('.bk-list').show();
                $('.mn-can').hide();
                $('#bb').hide();
               
            });
            $('.list-lt').click(function(){
                $('.bk-list').hide();
                $('.mn-can').show();

            });
            $('.list-l').click(function(){
                $('.bk-list').hide();
                $('.mn-can').show();
                $('.mn-framework .aa').css('padding-top','10px');
            });


    },
    //·µ»Ø¶¥²¿
    goTop:function(){
        $(window).scroll(function(){
            var sc=$(window).scrollTop();
            var rwidth=$(window).width();
            if(sc>200){
                $('#bb').css('display','block');
                $('#bb').css('left'+(rwidth-60)+'px');
            }else{
                $('#bb').css('display','none');
            }
        });
        $('#bb').click(function(){
            var sc=$(window).scrollTop();
            $('body , html').animate({scrollTop:0},500);
        });


    }

};
page.init();
