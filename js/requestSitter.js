$(document).ready(function() {
  $('#datepicker-start').datepicker();
  $('#datepicker-end').datepicker();

  $('form').submit(function(e) {
    e.preventDefault();

    window.location.href = 'my_cats.html';
  });
});