if(window.sessionStorage.getItem('posts') === null) {
  window.sessionStorage.setItem('posts', JSON.stringify(post_content));
}
window.sessionStorage.setItem('name', 'Anonymous');

$(function() {
  $('.cat-owner').click(function() {
    window.sessionStorage.setItem('name', 'Sam');
  });
  $('.cat-sitter').click(function() {
    window.sessionStorage.setItem('name', 'Frodo');
  });
});
