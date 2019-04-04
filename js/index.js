$(function () {
    // 轮播图
    $.ajax({
        type: 'get',
        url: 'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
        dataType: 'json',
        success: function (result) {
            if (result.meta.status == 200) {


                // console.log(result);
                var html = template('sm_ph', result)
                $('.sm_dynamic').html(html)
                var dotHtml = template('sm_dots', result)
                $('.sm_post').html(dotHtml)
                var gallery = mui('.mui-slider');
                gallery.slider({
                    interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
                });
            }
        }
    })
    $.ajax({
        type: 'get',
        url: 'http://157.122.54.189:9094/api/public/v1/home/goodslist',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var html = template('sm_table', result)
            $('.sm_information').html(html)





        }
    })

})