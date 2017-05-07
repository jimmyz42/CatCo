if(window.sessionStorage.getItem('name') === null) {
  location.href="choose.html";
} else {
  $(function() {
    $('.navbar-right').prepend('<li><a>Hello, ' + window.sessionStorage.getItem('name') + '</a></li>');
  });
}
