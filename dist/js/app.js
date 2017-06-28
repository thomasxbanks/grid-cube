"use strict";

// declare variables
var browserWidth = void 0,
    browserHeight = void 0,
    screenWidth = void 0,
    screenHeight = void 0,
    distance = void 0,
    target = void 0,
    device_type = void 0,
    device_name = void 0;

// What are the screen dimensions?
var screenSize = function screenSize() {
    screenWidth = screen.width;
    screenHeight = screen.height;
    // log for debug
    console.info(screenWidth, screenHeight);
};

// What are the browser dimensions?
var browser = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    // Scroll to anchor
};var scrollToAnchor = function scrollToAnchor(aid) {
    var aTag = document.querySelectorAll("a[name='" + aid + "']");
    aTag.forEach(function (obj) {
        document.querySelector('html,body').animate({
            scrollTop: obj.offset().top
        }, 900);
    });
};

// Make a button enabled
var enableButton = function enableButton(target) {
    document.querySelector(target).prop('disabled', false);
};

// Make a button disabled
var disableButton = function disableButton(target) {
    document.querySelector(target).prop('disabled', true);
};

// Destroy element
var destroyElement = function destroyElement(element) {
    document.querySelector(element).outerHTML = "";
};

// Get the value of the given parameter
var getURLParameter = function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    sURLVariables.forEach(function (object, index) {
        var sParameterName = sURLVariables[index].split('=');
        if (sParameterName[0] == sParam) {
            // Log for debug
            console.log('URL parameter:', sParameterName[1]);
            return sParameterName[1];
        }
    });
};

var urlContains = function urlContains(needle) {
    var haystack = window.location.href;
    return haystack.includes(needle) ? true : false;
};

var isAdult = function isAdult(data) {
    return data.age >= 18;
};

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;

    var animateScroll = function animateScroll(elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function () {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}

function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

"use strict";

var template = function template(post) {
    return "\n    <article class=\"item-" + post.size + "\">\n      <img src=\"" + post.hero + "\" />\n      <div class=\"inner\">\n        <h2 style=\"box-shadow: inset 0 -2px 0 #" + post.color + ";\">" + post.title + "</h2>\n        <p>" + post.excerpt + "</p>\n        <a href=\"#\">Read more <span class=\"arrow\">&rsaquo;</span><span class=\"underline\" style=\"box-shadow: inset 0 -4px 0  #" + post.color + ";\"></span></a>\n      </div>\n    </article>\n  ";
};

window.onload = function () {

    axios.get('data/data.json').then(function (response) {
        var data = response.data;
        data.forEach(function (post) {
            document.querySelector('main').innerHTML += template(post);
        });

        // Log for debug
        console.log(data);
    }).catch(function (error) {
        // Log for debug
        console.error(error);
    });
};
//# sourceMappingURL=app.js.map
