$(function() {
  $('.cat-owner').click(function() {
    window.sessionStorage.setItem('name', 'Sam');
    window.sessionStorage.setItem('home', 'my-cats.html');
  });
  $('.cat-sitter').click(function() {
    window.sessionStorage.setItem('name', 'Frodo');
    window.sessionStorage.setItem('home', 'browse-cats.html');
  });
});
