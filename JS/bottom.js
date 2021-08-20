
// ----------- Our Services -----------

const tabsTitle = document.querySelectorAll(".tabs__caption li");
for (let i = 0; i < tabsTitle.length; i++) {
    tabsTitle[i].addEventListener('click', function () {

        const parentUl = this.closest(".tabs__caption");
        for (let i = 0; i < parentUl.children.length; i++) {
            parentUl.children[i].classList.remove("active");
        }

        this.classList.add("active");

        const tabsContent = document.querySelectorAll(".tabs .tabs__content");
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.remove("active");
        }

        const tabId = this.dataset.target;
        console.log(tabId);

        const tab = document.getElementById(tabId);
        tab.classList.add("active");
    });
};


// ----------- Our Amazing Work -----------

const tabsImages = document.querySelectorAll(".nav-bar li");
for (let i = 0; i < tabsImages.length; i++) {
    tabsImages[i].addEventListener('click', function () {
        const parentUl = this.closest(".nav-bar");
        for (let i = 0; i < parentUl.children.length; i++) {
            parentUl.children[i].classList.remove("active");
        }

        this.classList.add("active");

    });
};



$('.all-images').click(function () {
    $('[class*=lol]').slice(0, 12).show();
    $('[class*=lol]').slice(12, 24).hide();
    $('#loadMore').show();
})

// const snowboards = document.querySelectorAll('.snowboard');
// snowboards.forEach(item => item.style.display = 'none');

$('.k').click(function () {
    $('[class*=snowboard]').hide();
    $('[class*=balloon]').hide();
    $('[class*=horses222]').hide();
    $('[class=button-load-more]').hide();
    $('[class*=kite]').show();
})

$('.b').click(function () {
    $('[class*=kite]').hide();
    $('[class*=horses222]').hide();
    $('[class*=snowboard]').hide();
    $('[class=button-load-more]').hide();
    $('[class*=balloon]').show();
})

$('.h').click(function () {
    $('[class*=kite]').hide();
    $('[class*=balloon]').hide();
    $('[class*=snowboard]').hide();
    $('[class=button-load-more]').hide();
    $('[class*=horses222]').show();
})

$('.s').click(function () {
    $('[class*=kite]').hide();
    $('[class*=horses222]').hide();
    $('[class*=balloon]').hide();
    $('[class=button-load-more]').hide();
    $('[class*=snowboard]').show();

});

$(function () {
    $(".gallery-hover-b").hide();
});

$(".act-ballon").on('mouseover', function () {
    $(this).find('.gallery-hover-b').show()

});

$(".act-ballon").on('mouseout', function () {
    $(this).find('.gallery-hover-b').hide()
});



$(function () {
    $(".gallery-hover-horses").hide();
});

$(".act-horses").on('mouseover', function () {
    $(this).find('.gallery-hover-horses').show()

});

$(".act-horses").on('mouseout', function () {
    $(this).find('.gallery-hover-horses').hide()
});




$(function () {
    $(".gallery-hover-s-bord").hide();
});

$(".act-s-board").on('mouseover', function () {
    $(this).find('.gallery-hover-s-bord').show()

});

$(".act-s-board").on('mouseout', function () {
    $(this).find('.gallery-hover-s-bord').hide()
});




$(function () {
    $(".gallery-hover-k-bord").hide();
});

$(".act-k-board").on('mouseover', function () {
    $(this).find('.gallery-hover-k-bord').show()

});

$(".act-k-board").on('mouseout', function () {
    $(this).find('.gallery-hover-k-bord').hide()
});




// ----------- Breaking News -----------

$(".wrapper-B-news").on('mouseover', function () {
    $(this).find('.h4-bold').addClass('h4-bold-hover');
    $(this).find('.square').addClass('square-hover');
});

$(".wrapper-B-news").on('mouseout', function () {
    $(this).find('.h4-bold').removeClass('h4-bold-hover');
    $(this).find('.square').removeClass('square-hover');
});


// ------- scroll ---------


$(function () {
    $(".worker-name").hide();
    $(".job").hide();
    $(".active").show();
});

// ----------- Section 3 -----------

const thumbsContent = document.querySelectorAll("#pics-thumbs li");
const ulContent = document.querySelectorAll('#view ul li');

for (let i = 0; i < thumbsContent.length; i++) {
    thumbsContent[i].addEventListener('click', function () {
        const activeLi = document.querySelector('.li-active');
        activeLi.classList.remove('li-active');

        const activeLiTh = document.querySelector('.active-thumb');
        activeLiTh.classList.remove('active-thumb');

        ulContent[i].classList.add('li-active');
        thumbsContent[i].classList.add('active-thumb');
    });
};


const thumbsNavLeft = document.querySelector('#nav-left-thumbs');
thumbsNavLeft.addEventListener('click', function() {
    
    const activeLiTh = document.querySelector('.active-thumb');
    const index = +activeLiTh.dataset.index;

    ulContent[index].classList.remove('li-active');
    activeLiTh.classList.remove('active-thumb');

    if(index===0) {
        ulContent[ulContent.length - 1].classList.add('li-active');
        thumbsContent[thumbsContent.length - 1].classList.add('active-thumb');

    } else {
        ulContent[index - 1].classList.add('li-active');
        thumbsContent[index - 1].classList.add('active-thumb');
    }
});

const thumbsNavRight = document.querySelector('#nav-right-thumbs');
thumbsNavRight.addEventListener('click', function() {

    const activeLiTh = document.querySelector('.active-thumb');
    const index = +activeLiTh.dataset.index;

    ulContent[index].classList.remove('li-active');
    activeLiTh.classList.remove('active-thumb');

    if(index===ulContent.length - 1) {
        ulContent[0].classList.add('li-active');
        thumbsContent[0].classList.add('active-thumb');

    } else {
        ulContent[index + 1].classList.add('li-active');
        thumbsContent[index + 1].classList.add('active-thumb');
    }    
});

