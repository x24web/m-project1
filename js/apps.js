//nav bar
$(document).ready(function () {
    var x = $('.right.hide-on-med-and-down').html();
    $('body').append('<ul class="side-nav" id="mobile-nav">');
    $('#mobile-nav').append(x);
    $('.button-collapse').sideNav();
    $('.slider').slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });
    $('input.autocomplete').autocomplete({
        data: {
          "Apple": null,
          "Microsoft": null,
          "Google": 'https://placehold.it/250x250'
        },
      });
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
});
