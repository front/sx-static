import $ from 'jquery';

class Gallery{

    constructor(){
        this.columns = 4;
        this.width = 195;
        this.margin = 25;
    }

    init(){
        var that = this;

        $('.wp-block-gallery').each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                removalDelay: 300,
                closeBtnInside: false,
                closeOnBgClick: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        var $gallery = item.el.closest('.wp-block-gallery');
                        var $result = '';
                        if ($gallery.find('li').length > 0) {
                            $result = `
                    <div class="mfp-caption">
                        ${item.el.next('figcaption').text()}
                    </div>`;
                        }
                        return $result;
                    }
                },
                callbacks: {
                    open: function () {
                        var el = $(this)[0]['wrap'][0];
                        var $gallery = $(this)[0]['ev'];
                        var $result = '';
                        var current = $(this)[0]['index'];
                        var container_width;
                        var mincolumns = that.columns;

                        if ($gallery.find('li').length < that.columns) {
                            container_width = (that.width * $gallery.find('li').length) + ($gallery.find('li').length * that.margin);
                            mincolumns = $gallery.find('li').length;
                        } else {
                            container_width = (that.width * that.columns) + (that.columns * that.margin);
                        }

                        if ($gallery.find('li').length > 0) {
                            $result = `
                    <div class="mfp-pager alignfull">
                    <div class="container" style="max-width: ${container_width}px">
                        <ul class="lightbox-carousel">`;
                            for (var i = 0; i < $gallery.find('li').length; i++) {
                                var $thumb = $gallery.find('li:eq(' + i + ')').find('img').attr('src');
                                $result += '<li>' +
                                    '<button type="button" data-slide="' + i + '" class="js-lightbox-thumb"><img src="' + $thumb + '"></button>' +
                                    '</li>';
                            }
                            $result += `
                        </div>
                        </ul>
                    </div>`;
                        }

                        $(el).find('.mfp-container').append($result);
                        var lightbox = $(el).find('.lightbox-carousel');
                        lightbox.find('li').eq(current).addClass('active');
                        lightbox.slick({
                            dots: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: mincolumns,
                            slidesToScroll: 1,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                    }
                                },
                                {
                                    breakpoint: 720,
                                    settings: {
                                        slidesToShow: 2,
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                    }
                                }
                            ]
                        });

                        if ($gallery.find('li').length > that.columns)
                            lightbox.slick('slickGoTo', current, true);

                        $(el).on("click", '.js-lightbox-thumb', function () {
                            var slide_num = $(this).data('slide');

                            $gallery.magnificPopup('goTo', slide_num);
                            lightbox.find('li.active').removeClass('active');
                            lightbox.find('button[data-slide="' + slide_num + '"]').closest('li').addClass('active');
                        });
                    },

                    change: function () {
                        var el = $(this)[0]['wrap'][0];
                        var lightbox = $(el).find('.lightbox-carousel');
                        var index = $(this)[0]['index'];

                        lightbox.find('li.active').removeClass('active');
                        lightbox.find('button[data-slide="' + index + '"]').closest('li').addClass('active');
                    }
                }
            });
        });
    }
}

export default Gallery;
