$(function () {
    'use strict';

    var loremText, lorem1, lorem2, lorem3;

    loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend interdum feugiat. Proin sit amet nisi massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus eleifend lacus vitae libero consectetur dignissim. Proin pretium dapibus nibh, quis commodo nulla ultricies ac. Duis tristique pellentesque nunc ac rhoncus. Mauris auctor purus eu dui congue fringilla vitae sit amet magna.';

    lorem1 =  '<h1>Cala Goloritze</h1>' + loremText + '<img src="images/calagoloritze.jpg">' + loremText;
    lorem2 =  '<h1>Capo Nieddu</h1>' + loremText + '<img src="images/caponieddu.jpg">' + loremText + loremText;
    lorem3 =  '<h1>Broncu Spina</h1>' + loremText + '<img src="images/broncuspina.jpg">' + loremText;

    $(".lorem-text-1").html(lorem1);
    $(".lorem-text-2").html(lorem2);
    $(".lorem-text-3").html(lorem3);

});
