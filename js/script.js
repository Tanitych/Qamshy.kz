$(document).ready(function () {
    $('.header__burger,.cross').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        // $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $(".menu__toggle__btn").click(function () { // задаем функцию при нажатиии на элемент с классом slide-toggle
        $(".toggle__menu").slideToggle(); // плавно скрываем, или отображаем все элементы <div>
    });
});
$(".toggle__menu").hide();
$('.drop__language').click(function (event) {
    $('.drop__language, .drop__language__content').toggleClass('show');

});

window.onclick = function (event) {
    if (!event.target.matches('.drop__language__btn')) {
        var dropdowns = document.getElementsByClassName("drop__language__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
$('.search__btn').click(function (event) {
    $('.search__btn, .search__header').toggleClass('show');

});

//tabs

const tabsBtn = document.querySelectorAll(".tabs__nav__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active");
            });
            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
});
document.querySelector('.tabs__nav__btn:nth-child(1)').click();

//tabs2
const tabsBtn2 = document.querySelectorAll(".tabs__nav__btn2");
const tabsItems2 = document.querySelectorAll(".tabs__item2");

tabsBtn2.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn2 = item;
        let tabId2 = currentBtn2.getAttribute("data-tab2");
        let currentTab2 = document.querySelector(tabId2);

        if (!currentBtn2.classList.contains("active")) {
            tabsBtn2.forEach(function (item) {
                item.classList.remove("active");
            });

            tabsItems2.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn2.classList.add("active");
            currentTab2.classList.add("active");
        }
    });
});
document.querySelector('.tabs__nav__btn2:nth-child(1)').click();


//Adaptive functions
$(window).resize(function (event) {
    adaptive_function();
});
function adaptive_header(w, h) {
    var headerMenu = $('.append-tabs_block');
    var headerLang = $('.subnews__block__tabs');
    if (w < 767) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo($('.prepend-tabs-block'));
        }
    }
}
function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();