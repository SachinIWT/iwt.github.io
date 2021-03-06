window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var $;
var stopLoop = false;

var rad = 0;
var num = 700;
var size = 15;
var len = 0;
var arr = [];

var midX;
var midY;

var msX = 0;
var msY = 0;

var w;
var h;


var wrapper = document.getElementById('hr__inter-cosmic');

document.addEventListener("DOMContentLoaded", function () {
    var c = document.createElement("canvas");
    wrapper.appendChild(c);

    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;

    $ = c.getContext("2d");

    midX = c.width / 2;
    midY = c.height / 2;

    rad = c.height;

    for (var i = 0; i < num; i++) {
        arr[i] = new Part();
    }

    $.fillStyle = "hsla(217, 35%, 15%, 1)";
    $.fillRect(0, 0, c.width, c.height);

    len = h / 2;

    wrapper.addEventListener("mousemove", msmv, false);
    //wrapper.addEventListener("touchmove", tcmv, false);
    wrapper.addEventListener('load', resize);
    wrapper.addEventListener('resize', resize, false);
    run();
    var center = Math.round(len);

    (function myLoop (i) {
        if (stopLoop) { return; }

        setTimeout(function () {
            msY = center * 0.9- i;
            i = i - 8;

            if (i > 0) myLoop(i);
        }, 1000 / 60 )
    })(center * 0.9);
});


function resize() {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
    c.style.position = 'absolute';
    c.style.left = (window.innerWidth - w) *
        .01 + 'px';
    c.style.top = (window.innerHeight - h) *
        .01 + 'px';
}

function msmv(e) {
    var rect = wrapper.getBoundingClientRect();

    stopLoop = true;
    msX = e.clientX - rect.left;
    msY = e.clientY - rect.top;
    //console.log(msX, msY);
}

function tcmv(e) {
    var rect = wrapper.getBoundingClientRect();

    stopLoop = true;
    msX = e.touches[0].pageX - rect.left;
    msY = e.touches[0].pageY - rect.top;
}

function disp(p1, p2) {
    return (p2.z - p1.z);
}

function go() {
    $.globalCompositeOperation = 'source-over';
    $.fillStyle = "hsla(217, 35%, 5%, .8)";
    $.fillRect(0, 0, w, h);
    $.globalCompositeOperation = 'lighter';
    arr.sort(disp);

    for (var i = 0; i < num; i++) {
        arr[i].upd();
        arr[i].draw();
    }

}

function run() {
    go();
    window.requestAnimFrame(run, 45);
}
var rndCol = function() {
    var r = Math.floor(Math.random() * 180);
    var g = Math.floor(Math.random() * 60);
    var b = Math.floor(Math.random() * 100);
    return "rgb(" + r + "," + g + "," + b + ")";
}

var Part = function() {
    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.vx = 0;
    this.vy = 0;

    this.dx = Math.random() * Math.PI;
    this.dy = 0;

    this.phi = Math.random() * Math.PI * 2;
    this.t = Math.random() * Math.PI;

    if (Math.random() < 0.5) {
        this.col = rndCol();
        this.dir = 1;
    } else {
        this.col = rndCol();
        this.dir = -1;
    }
}

Part.prototype.draw = function() {
    var s = this.scale() * 0.7;
    var x = w * 0.25 + this.x * s;
    var y = h / 2 + this.y * s;

    $.fillStyle = this.col;

    if (this.z > -rad / 2) {
        $.beginPath();
        $.arc(x, y, Math.ceil(size * s), 0, Math.PI * 2, false);
        $.fill();
    }
}

Part.prototype.scale = function() {
    return (len / (len + this.z));
}

Part.prototype.upd = function() {
    var m = (w / 2 - msX) / w / 50;
    this.phi += (this.dy + m) * this.dir;
    this.t = this.dx;

    this.x = rad * Math.sin(this.t) * Math.cos(this.phi);
    this.y = rad * Math.cos(this.t);
    this.z = rad * Math.sin(this.t) * Math.sin(this.phi) +
        rad / 2 * (h / 1.2 - msY) / h * 4;
}