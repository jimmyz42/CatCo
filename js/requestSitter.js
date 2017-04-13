$(document).ready(function() {
  $('#datepicker-start').datepicker();
  $('#datepicker-end').datepicker();

  $('#unsaved-changes-modal').modal({ show: false });

  $('form').submit(function(e) {
    e.preventDefault();

    if ($('#save-profile-button').is(':visible') || $('#save-schedule-button').is(':visible')) {
      // We're in edit mode, alert the user that they have not saved their changes
      $('#unsaved-changes-modal').modal('show');
    } else {
      // Mock "submitting" the form by going to a My Cats page with the sitter requested
      window.location.href = 'myCatsRequested.html';
    }

  });

  $('#discard-changes-submit').click(function() {
    window.location.href = 'myCatsRequested.html';
  });

  $('#save-changes-dismiss').click(function() {
    if ($('#save-profile-button').is(':visible')) {
      $('#save-profile-button').addClass('glowing-border');
    }
    if ($('#save-schedule-button').is(':visible')) {
      $('#save-schedule-button').addClass('glowing-border');
    }
  });

  $('#edit-profile-button').click(function() {
    $('#photo-upload').show();

    $('#edit-profile').show();
    $('#edit-profile').val($('#profile').html());
    $('#profile').hide();

    $('#edit-my-phone').show();
    $('#edit-my-phone').val($('#my-phone').text());
    $('#my-phone').hide();

    $('#edit-my-email').show();
    $('#edit-my-email').val($('#my-email').text());
    $('#my-email').hide();

    $('#edit-vet-name').show();
    $('#edit-vet-name').val($('#vet-name').text());
    $('#vet-name').hide();

    $('#edit-vet-address-1').show();
    $('#edit-vet-address-1').val($('#vet-address-1').text());
    $('#vet-address-1').hide();

    $('#edit-vet-address-2').show();
    $('#edit-vet-address-2').val($('#vet-address-2').text());
    $('#vet-address-2').hide();

    $('#edit-vet-phone').show();
    $('#edit-vet-phone').val($('#vet-phone').text());
    $('#vet-phone').hide();

    $('#edit-profile-button').hide();
    $('#save-profile-button').show();
  });

  $('#save-profile-button').click(function() {
    $('#photo-upload').hide();

    $('#edit-profile').hide();
    $('#profile').html($('#edit-profile').val());
    $('#profile').show();

    $('#edit-my-phone').hide();
    $('#my-phone').html($('#edit-my-phone').val());
    $('#my-phone').show();

    $('#edit-my-email').hide();
    $('#my-email').html($('#edit-my-email').val());
    $('#my-email').show();

    $('#edit-vet-name').hide();
    $('#vet-name').html($('#edit-vet-name').val());
    $('#vet-name').show();

    $('#edit-vet-address-1').hide();
    $('#vet-address-1').html($('#edit-vet-address-1').val());
    $('#vet-address-1').show();

    $('#edit-vet-address-2').hide();
    $('#vet-address-2').html($('#edit-vet-address-2').val());
    $('#vet-address-2').show();

    $('#edit-vet-phone').hide();
    $('#vet-phone').html($('#edit-vet-phone').val());
    $('#vet-phone').show();

    $('#edit-profile-button').show();
    $('#save-profile-button').hide();
    $('#save-profile-button').removeClass('glowing-border');
  });

  $('#edit-schedule-button').click(function() {
    $('#edit-feed').show();
    $('#edit-feed').val($('#feed').text());
    $('#feed').hide();

    $('#edit-feed-units').show();
    $('#edit-feed-units').val($('#feed-units').text());
    $('#feed-units').hide();

    $('#edit-play').show();
    $('#edit-play').val($('#play').text());
    $('#play').hide();

    $('#edit-play-units').show();
    $('#edit-play-units').val($('#play-units').text());
    $('#play-units').hide();

    $('#edit-water').show();
    $('#edit-water').val($('#water').text());
    $('#water').hide();

    $('#edit-water-units').show();
    $('#edit-water-units').val($('#water-units').text());
    $('#water-units').hide();

    $('#edit-litter').show();
    $('#edit-litter').val($('#litter').text());
    $('#litter').hide();

    $('#edit-litter-units').show();
    $('#edit-litter-units').val($('#litter-units').text());
    $('#litter-units').hide();

    $('#edit-special-care').show();
    $('#edit-special-care').val($('#special-care').html());
    $('#special-care').hide();

    $('#edit-schedule-button').hide();
    $('#save-schedule-button').show();
  });

  $('#save-schedule-button').click(function() {
    $('#edit-feed').hide();
    $('#feed').html($('#edit-feed').val());
    $('#feed').show();

    $('#edit-feed-units').hide();
    $('#feed-units').html($('#edit-feed-units').val());
    $('#feed-units').show();

    $('#edit-play').hide();
    $('#play').html($('#edit-play').val());
    $('#play').show();

    $('#edit-play-units').hide();
    $('#play-units').html($('#edit-play-units').val());
    $('#play-units').show();

    $('#edit-water').hide();
    $('#water').html($('#edit-water').val());
    $('#water').show();

    $('#edit-water-units').hide();
    $('#water-units').html($('#edit-water-units').val());
    $('#water-units').show();

    $('#edit-litter').hide();
    $('#litter').html($('#edit-litter').val());
    $('#litter').show();

    $('#edit-litter-units').hide();
    $('#litter-units').html($('#edit-litter-units').val());
    $('#litter-units').show();

    $('#edit-special-care').hide();
    $('#special-care').html($('#edit-special-care').val());
    $('#special-care').show();

    $('#edit-schedule-button').show();
    $('#save-schedule-button').hide();
    $('#save-schedule-button').removeClass('glowing-border');
  });
});