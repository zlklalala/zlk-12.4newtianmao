/*
 * @Author: Administrator
 * @Date:   2017-11-08 19:05:22
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-12-04 17:11:14
 */

$(function () {


    
    let t = setInterval(fn, 2500)
    $('.banner').mouseenter(function () {
        clearInterval(t)
    })
    $('.banner').mouseleave(function () {
        clearInterval(t)
        t = setInterval(fn, 2500)
    })
    var num = 0;

    function fn() {
        num++
        if (num == $('.bntli').length) {
            num = 0;
        }
        $('.bntli').css({opacity: "0", zIndex: "5"})
        $('.listli').css({backgroundColor: "#666"})

        $('.bntli').eq(num).css({opacity: "1", zIndex: "8"})
        $('.listli').eq(num).css({backgroundColor: "white"})

    }

    $('.listli').mouseover(function () {
        $('.bntli').eq(num).css({opacity: "0", zIndex: "5"})
        $('.listli').eq(num).css({backgroundColor: "666"})

        var index = $('.listli').index($(this))

        $('.bntli').eq(index).css({opacity: "1", zIndex: "8"})
        $('.listli').eq(index).siblings().css({background: "#666"});
        $('.listli').eq(index).css({backgroundColor: "white"})

        num = index;
    })


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
    // for (let i = 0; i < srtli.length; i++) {
    //     srtli[i].onmouseover = function () {
    //         ac[i].style.display = "block";
    //     }
    //     srtli[i].onmouseout = function () {
    //         ac[i].style.display = "none";
    //     }
    //
    //     ac[i].onmouseover = function () {
    //         srtli[i].style.background = "white";
    //         ac[i].style.display = "block";
    //     }
    //     ac[i].onmouseout = function () {
    //         srtli[i].style.background = "";
    //         ac[i].style.display = "none";
    //     }
    //
    //
    // }


    $('.ce li').mouseenter(function () {
        $(this).has('sideade').css({"display": "block"})
    })
    $('.ce li').mouseleave(function () {
        $(this).has('sideade').css({"display": "none"})
    })


    //楼层跳转
    let up = false;
    let down = true;
    console.log($('.chaoshi').eq(0).offset().top)
    $(window).scroll(function () {
       

       let topss= $(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop()
       
        let objs = topss
        // console.log(objs)
        let chaoshi = document.querySelectorAll(".chaoshi")
        // let filift = document.querySelectorAll(".fi-lift")[0]
        $('.fi-lift')
        if (objs > $('.chaoshi').eq(0).offset().top - 500) {
            if (down) {
                down = false;
                $('.fi-lift').animate({width: "35px", height: "370px"},200,function () {
                    up = true;
                })
                // animate(filift, {width: 35, height: 370}, 200, Tween.Circ.easeInOut, function () {
                //     up = true;
                // })
                $('.fi-top').animate({top:0},200,function () {
                    up = true;
                })
                // animate(fitop, {top: 0}, 200, Tween.Circ.easeInOut, function () {
                //     up = true;
                // })
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
                // animate(filift, {width: 0, height: 0}, 200, Tween.Quad.easeIn, function () {
                //     down = true;
                // })
                // animate(fitop, {top: -50}, 200, Tween.Quad.easeIn, function () {
                //     down = true;
                // })
                // filift.classList.remove("activea")
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
                    // $(document.body).animate({scrollTop:'0'})
                })
            })
            // leftbox.forEach(function (a, b) {
            //     a.onclick = function () {
            //         animate(document.documentElement, {scrollTop: chaoshi[b].offsetTop - 20})
            //         animate(document.body, {scrollTop: chaoshi[b].offsetTop - 20})
            //     }
            //
            // })


        })
        $('.xiao10').click(function () {
            $(document.documentElement).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
            $(document.body).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
        })
        // let dingbu = document.querySelectorAll(".xiao10")[0];
        // dingbu.onclick = function () {
        //     animate(document.body, {scrollTop: 0}, 300)
        //     animate(document.documentElement, {scrollTop: 0}, 300)
        //
        // }


    })
})
