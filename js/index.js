
console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("button").hover(function() {
        $(this).css("background-color", "white");
    }, function() {
        $(this).css("background-color", "#134841");
    });
});

$(document).ready(function(){
    $("button").hover(function() {
        $(this).css("color", "black");
    }, function() {
        $(this).css("color", "white");
    });
});