// ----------- Our Amazing Work -----------

$(function () {
    $(document).on('click', '.button-load-more', function () {
        $(this).addClass('disabled');
    });
});

// ----------- loader -----------

$(function () {
    $(".loader").hide();
});

$(function () {
    $(".lol").slice(0, 12).show();
    $("#loadMore").on('click', function (e) {

        $(".loader").show();

        setTimeout(function () {

            e.preventDefault();
            $(".lol:hidden").slice(0, 12).slideDown();
            $(".loader").hide();
            $("#loadMore").toggleClass('disabled')

            if ($(".lol:hidden").length == 0) {
                setTimeout(function () {
                    $("#loadMore").hide();
                }, 10)

            }
        }, 2000)
    })
});

