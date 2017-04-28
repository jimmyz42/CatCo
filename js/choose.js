$(function() {
  $('.cat-owner').click(function() {
    window.sessionStorage.setItem('name', 'Sam');
  });
  $('.cat-sitter').click(function() {
    window.sessionStorage.setItem('name', 'Frodo');
  });
});
