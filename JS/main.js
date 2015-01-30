$(document).ready(function() {
    $(body).prepend('<p>Hello World</p>')
});

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var webName = "codybutter.github.io";
var letterColors = [red, orange, green, blue, purple];

drawName(webName, letterColors);