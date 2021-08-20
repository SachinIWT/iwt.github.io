// Cache your DOM elements
const els = {
    navIcon: document.getElementById('js-nav-button'),
    navIconSecondary: document.getElementById('js-nav-button-secondary'),
    nav: document.getElementById('site-navigation'),
    //overlay: document.getElementById('js-overlay'),*/
    burgerLine: document.querySelector('.burger__line'),
    html: document.documentElement
};

function toggleMenu() {
    els.navIcon.classList.toggle('hr__mobile-menu-toggle--open');
    els.nav.classList.toggle('main-navigation--visible');
    els.html.classList.toggle('noscroll');
    /*document.body.classList.toggle('overflow');
    els.overlay.classList.toggle('site-overlay--visible');
    */

    return false;
}


if (els.navIcon) {
    els.navIcon.addEventListener('click', toggleMenu);
}

if (els.navIconSecondary) {
    els.navIconSecondary.addEventListener('click', toggleMenu);
}
/*els.overlay.addEventListener( 'click', toggleMenu );*/


var h = document.getElementById("header-sticky");
var content = document.getElementById("primary");
var stuck = false;
var stickPoint = getDistance(h);

function getDistance(h) {

    if (h) {
        var topDist = h.offsetTop;
        return topDist;
    }
}

if (document.body.classList.contains("home")) {

    window.onscroll = function (e) {
        var distance = getDistance(h) - window.pageYOffset;
        var offset = window.pageYOffset;

        if ((distance <= 0) && !stuck) {
            document.body.classList.add('header-sticky');
            //content.style.paddingTop = h.offsetHeight + 'px';
            stuck = true;
        } else if (stuck && (offset <= stickPoint)) {
            document.body.classList.remove('header-sticky');
            //content.style.paddingTop = 0;
            stuck = false;
        }
    }
}