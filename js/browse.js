var cats;

$(document).ready(function() {
  // Populate cat cards
  cats = cat_data['cats'];

  showCats(cats);

  // Set up datepicker
  $('#datepicker-start').datepicker();
  $('#datepicker-end').datepicker();

  $('#search-name').click(function(e) {
    e.preventDefault();
    var myCats = cats.filter(function(cat) {
      return cat.name.toLowerCase() === $('#cat-name').val();
    });
    showCats(myCats);
  });
  $('#search-dates').click(function(e) {
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
