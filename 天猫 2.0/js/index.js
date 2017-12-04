/*
 * @Author: Administrator
 * @Date:   2017-11-08 19:05:22
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-12-04 17:11:14
 */

$(function () {



    //轮播图
    let t = setInterval(fn, 2500)
    $('.banner').mouseenter(function () {
        clearInterval(t)
    });
    $('.banner').mouseleave(function () {
        clearInterval(t);
        t = setInterval(fn, 2500)
    });
    var num = 0;
    function bianse(num) {

        let brr=["#ff0000","#00d884","#5d42ff","#ff008e","#ff873a","#ff3a89"];
        let crr1=brr[num+1];
        console.log(crr1);
        let bannerbox=document.querySelector(".bannerbox");
        bannerbox.style.backgroundColor=`${crr1}`;
    }


    function fn() {
        bianse(num);
        num++
        if (num == $('.bntli').length) {
            num = 0;
        }
        $('.bntli').css({opacity: "0", zIndex: "5"});
        // $('.bannerbox').eq(num).css({backgroundColor: crr1});


        $('.listli').css({backgroundColor: "#666"});


        $('.bntli').eq(num).css({opacity: "1", zIndex: "8"})
        $('.listli').eq(num).css({backgroundColor: "white"})

    }


    //侧边的选项卡
    console.log($('.ce > li'));
    $('.ce > li').each(function (i) {
        $(this).hover(function () {
            console.log("enter");
            $('.sideade').eq(i).toggle();
        },function () {
            console.log("leave");
            $('.sideade').eq(i).toggle();
        })
    })




    $('.listli').mouseover(function () {

        $('.bntli').eq(num).css({opacity: "0", zIndex: "5"})
        $('.listli').eq(num).css({backgroundColor: "666"})

        var index = $('.listli').index($(this))
        bianse(index-1);
        $('.bntli').eq(index).css({opacity: "1", zIndex: "8"})
        $('.listli').eq(index).siblings().css({background: "#666"});
        $('.listli').eq(index).css({backgroundColor: "white"})

        num = index;
    });


    let ac = document.getElementsByClassName("ac")
    let srtli = document.getElementsByClassName("srtli")
    $('.srtli').mouseenter(function () {
        let index = $('.srtli').index($(this))

        $('.ac').eq(index).show()
    })
    $('.srtli').mouseleave(function () {
        let index = $('.srtli').index($(this))
        $('.ac').eq(index).hide()
    })
    $('ac').mouseenter(function () {
        var index = $('.ac').index(this)
        $('.srtli').eq(index).css({background: "white"})
        $(".ac").eq(index).show()
    })
    $('ac').mouseleave(function () {
        var index = $('.ac').index(this)
        $('.srtli').eq(index).css({background: ""})
        $(".ac").eq(index).hide()
    })



    $('.ce li').mouseenter(function () {
        $(this).has('sideade').css({"display": "block"})
    })
    $('.ce li').mouseleave(function () {
        $(this).has('sideade').css({"display": "none"})
    })


    //楼层跳转
    let up = false;
    let down = true;
    console.log($('.chaoshi').eq(0).offset().top);
    $(window).scroll(function () {
       let topss= $(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop();
       let objs = topss;

        let chaoshi = document.querySelectorAll(".chaoshi");

        $('.fi-lift')
        if (objs > $('.chaoshi').eq(0).offset().top - 500) {
            if (down) {
                down = false;
                $('.fi-lift').animate({width: "35px", height: "370px"},300,function () {
                    up = true;
                });

                $('.fi-top').animate({top:0},300,function () {
                    up = true;
                })

            }
        } else {
            if (up) {
                up = false;
                $('.fi-lift').animate({width: "0px", height: "0px"},200,function () {
                    down = true;
                })
                $('.fi-top').animate({top:"-50"},200,function () {
                    down = true;
                })

            }
        }


        let leftbox = $(".F4 li")
        let nn;
        let arr = ["#64C333", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000"];      
        chaoshi.forEach(function (val, index) {
            if (objs > val.offsetTop - 200) {
                for (let i = 0; i < leftbox.length; i++) {
                    leftbox[i].style.background = "";
                }
                leftbox[index].style.background = arr[index];
                nn = index;
            }
            leftbox.each(function (index,val) {

                leftbox.eq(index).click(function () {
                    console.log(1)
                    $(document.documentElement).animate({scrollTop:$('.chaoshi').eq(index).offset().top-70},300,function () {
                        $(document.documentElement).stop(true,true)
                    })
                    $(document.body).animate({scrollTop:$('.chaoshi').eq(index).offset().top-70},300,function () {
                        $(document.documentElement).stop(true,true)
                    })

                })
        })



        })
        $('.xiao10').click(function () {
            $(document.documentElement).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
            $(document.body).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
        })



    })


    //楼层跳转
   /* let up = false;
    let down = true;
    $(window).scroll(function () {
        let Tops= $(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop()

        if(Tops>$('.chaoshi').eq(0).offset().top- 400){
            if (down) {
                down = false;
                $('.fi-lift').animate({width: "35px", height: "370px"},200,function () {
                    up = true;
                });
                $('.fi-top').animate({top:0},300,function () {
                    up = true;
                })
        }else{
                if(up){
                   $('.fi-lift').animate({"width":0,height:0},300,function () {
                       down=true;
                   })
                } $('.fi-top').animate({"top":"-50"},300,function () {
                    down=true;
                })


            }

        }
        let arr = ["#64C333", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000"];

        let nn;

        $('.chaoshi').each(function (i,val) {

            if(Tops>val.offsetTop - 200){
                $(".F4 li").each(function (j) {
                    $(".F4 li")[j].style.background = "";
                })
                $(".F4 li").get(i).style.background = arr[i];

                nn=i;
            }
        })


        $(".F4 li").each(function (index,val) {

            $(".F4 li").eq(index).click(function () {
                console.log(1)
                $(document.documentElement).animate({scrollTop:$('.chaoshi').eq(index).offset().top-70},300,function () {
                    $(document.documentElement).stop(true,true)
                })
                $(document.body).animate({scrollTop:$('.chaoshi').eq(index).offset().top-70},300,function () {
                    $(document.documentElement).stop(true,true)
                })
                // $(document.body).animate({scrollTop:'0'})
            })
        })


        // console.log($('.chaoshi').eq(0).scrollTop());
    })*/


})
