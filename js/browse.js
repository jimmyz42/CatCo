var cats;

$(document).ready(function() {
  // Populate cat cards
  cats = cat_data['cats'];

  // Remove Ginger if the user has already claimed them
  if (window.sessionStorage.getItem('home') === 'catsitting-ginger.html') {
    cats.shift();
  }

  showCats(cats);

  // Set up datepicker
  $('#datepicker-start').datepicker();
  $('#datepicker-end').datepicker();

  $('#search-name-form').submit(function(e) {
    e.preventDefault();
    var myCats = cats.filter(function(cat) {
      return cat.name.toLowerCase() === $('#cat-name').val().toLowerCase();
    });
    showCats(myCats);
  });
  $('#search-dates-form').submit(function(e) {
    e.preventDefault();
    var myCats = cats.filter(function(cat) {
      return Date.parse($('#datepicker-start').val()) <= cat.start && cat.end <= Date.parse($('#datepicker-end').val());
    });
    showCats(myCats);
  });
});

function showModal(index) {
  $('.modal-cat-name').html(cats[index].name);
  $('#photo').attr('src', cats[index].picture);
  $('#cat-modal').modal('show');
  if (index!=0){
    $('#msg').attr('disabled', true)
  }
  else{
    $('#msg').attr('disabled', false)
  }
};

function showCats(myCats) {
  $('.cat-results').empty();

  if (!myCats.length) {
    // Show no results
    $('#no-results').show();
    return;
  }
  $('#no-results').hide();

  for (var i = 0; i < myCats.length; i++) {
    var catCard = $(
      '<div class="cat-card" id="' + myCats[i].id + '" onClick="showModal(' + i + ')">' + 
        '<div class="cat-image">' +
          '<img src="' + myCats[i].picture + '" />' +
        '</div>' +
        '<h2 class="cat-name">' +
          myCats[i].name +
        '</h2>' +
        '<h2 class="cat-date">' +
          myCats[i].dates +
        '</h2></div>');
    $('.cat-results').append(catCard);
  }
}
