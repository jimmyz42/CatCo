var cats;

$(document).ready(function() {
  // Populate cat cards
  cats = cat_data['cats'];

  var indices = [];
  for (var i = 0; i < cats.length; i++) {
    indices.push(i);
  }
  showCats(indices);

  // Set up datepicker
  $('#datepicker-start').datepicker();
  $('#datepicker-end').datepicker();
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

function showCats(indices) {
  $('.cat-results').empty();

  var catCard;
  for (var i = 0; i < indices.length; i++) {
    catCard = $(
      '<div class="cat-card" id="' + cats[i].id + '" onClick="showModal(' + i + ')">' + 
        '<div class="cat-image">' +
          '<img src="' + cats[i].picture + '" />' +
        '</div>' +
        '<h2 class="cat-name">' +
          cats[i].name +
        '</h2>' +
        '<h2 class="cat-date">' +
          cats[i].dates +
        '</h2></div>');
    $('.cat-results').append(catCard);
  }
}