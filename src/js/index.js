import $ from 'jquery';
import 'magnific-popup';
import 'slick-carousel';

import SkipLinkFix from './components/skip-link-focus-fix';
import SelectLanguage from './components/select-language';
import Menu from './components/menu';
import Search from './components/search';
import Accordion from './components/accordion';
import AlignFull from './components/alignfull';
//import DarkColumns from './components/dark-columns';

$(document).ready(() => {
    (async () => {
        await new Promise(res => res());
    })();
    const skipLink = new SkipLinkFix();
    skipLink.init();
    const menu = new Menu();
    menu.init();
    const search = new Search();
    search.init();
    const selectLanguage = new SelectLanguage(document.querySelector('.js-lang-btn'));
    selectLanguage.init();
    const accordion = new Accordion();
    accordion.init();
    const alignfull = new AlignFull();
    alignfull.init();
    //const darkColumns = new DarkColumns();
    //darkColumns.init();

    var columns = 4;
    var width = 195;
    var margin = 25;

    $('.wp-block-gallery').each(function(){
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
                    var mincolumns = columns;

                    if($gallery.find('li').length < columns) {
                        container_width = (width * $gallery.find('li').length) + ($gallery.find('li').length * margin);
                        mincolumns = $gallery.find('li').length;
                    } else{
                        container_width = (width * columns) + (columns * margin);
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

                    if ($gallery.find('li').length > columns)
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



});
