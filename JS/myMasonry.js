 $(document).ready(function () {


    //  $(function () {
    //      $(".cover-item").hide();
    //  });

    //  $(function () {
    //      $('.all-gallery-masonry').hover(
    //          function () {

    //              $(this).find('.cover-item').show()
    //          },
    //          function () {
    //              $(this).find('.cover-item').hide()
    //          }
    //      )
    //  })  ПОЧЕМУ НЕ СРАБОТАЛО ДЛЯ ВТОРОГО БЛОКА ИЗОБРАЖЕНИЙ?

$(window).load(function() {
    var sizer = '.sizer4';
    var container = $('#gallery-masonry');
    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: '.item-masonry',
            columnWidth: sizer,
            gutter: 15,
            percentPosition: true,
        });
    });

    var elems = `	
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/girl-4746895_960_720.jpg" alt="smth-nice">
    </div>
    
    
    </div>
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/Screenshokt_1.png" alt="smth-nice">
    
    </div>
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/paragliding-4727377_960_720.jpg" alt="smth-nice">
    
    </div>
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/carp-4744764_960_720.jpg" alt="smth-nice">
    
    </div>
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/IMG_2448.JPG" alt="smth-nice">
    
    </div>
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/IMG_2450.JPG" alt="smth-nice">
    
    </div>
    <div class="item-masonry sizer4 all-gallery-masonry">
    <img src="./images/masonry-gallery/16.jpg" alt="smth-nice">
    
    </div>`;

     var $elems = $(elems)

     $(function () {

        $("#loadMore2").on('click', function (e) {

            $(".loader").show();

            setTimeout(function () {

                e.preventDefault();

                container.append($elems).masonry('appended', $elems);

                hoverItem();
                $(".loader").hide();
                $("#loadMore2").toggleClass('disabled');

                if ($(".sizer4:hidden").length == 0) {
                    setTimeout(function () {
                        $("#loadMore2").hide();
                    }, 10)

                }
            }, 2000)
        })
    });

})
    



     var sizer2 = '.sizer2';
     var container2 = $('#pre-gallery');

     container2.imagesLoaded(function () {
         container2.masonry({
             itemSelector: '.item-masonry2',
             columnWidth: sizer2,
             gutter: 7,
             percentPosition: true,
         });
     });

     var sizer3 = '.sizer3';
     var container3 = $('#gallery-after');

     container3.imagesLoaded(function () {
         container3.masonry({
             itemSelector: '.item-masonry3',
             columnWidth: sizer3,
             gutter: 5,
             percentPosition: true,
         });
     });






     // masonry button

     $(function () {
         $(document).on('click', '.button-load-more2', function () {
             $(this).addClass('disabled');

         });
     });

     function hoverItem() {
         $('.all-gallery-masonry').mouseenter(function () {
             let offset = $(this).offset()
             let width = $(this).width()
             let height = $(this).height()
             $('.cover-item').css('display', 'flex')
             $('.cover-item').offset(offset).width(width).height(height)
         });

         $('.cover-item').mouseleave(function () {
             $('.cover-item').css('display', 'none');

         });
     }

     hoverItem()




    
 });

