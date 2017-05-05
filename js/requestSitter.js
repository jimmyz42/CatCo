$(document).ready(function() {
  $('#datepicker-start').datepicker({ minDate: 0 });
  $('#datepicker-end').datepicker({ minDate: 0 });

  $('#unsaved-changes-modal').modal({ show: false });

  $('form').submit(function(e) {
    e.preventDefault();

    if ($('#save-profile-button').is(':visible') || $('#save-schedule-button').is(':visible')) {
      // We're in edit mode, alert the user that they have not saved their changes
      $('#unsaved-changes-modal').modal('show');
    } else {
      var valid = true;
      // Validate non-input fields
      $('.val-required').each(function() {
        if (!($(this).text().trim())) {
          $(this).tooltip({ placement: 'right', title: 'Please enter a value for this field.', trigger: 'manual' });
          $(this).tooltip('show');
          valid = false;
          // Remove tooltip on focus
          $(this).focus(function() {
            $(this).tooltip('destroy');
          });
        }
      });

      $('.val-numeric').each(function() {
        if ($(this).text().trim() && isNaN(parseInt($(this).text(), 10))) {
          $(this).tooltip({ placement: 'right', title: 'Please enter a number for this field.', trigger: 'manual' });
          $(this).tooltip('show');
          valid = false;
          // Remove tooltip on focus
          $(this).focus(function() {
            $(this).tooltip('destroy');
          });
        }
      });

      $('.val-nonnegative').each(function() {
        if ($(this).text().trim() && !isNaN(parseInt($(this).text(), 10)) && parseFloat($(this).text(), 10) < 0) {
          $(this).tooltip({ placement: 'right', title: 'Please enter a non-negative number for this field.', trigger: 'manual' });
          $(this).tooltip('show');
          valid = false;
          // Remove tooltip on focus
          $(this).focus(function() {
            $(this).tooltip('destroy');
          });
        }
      });

      if (valid) {
        // Mock "submitting" the form by going to a My Cats page with the sitter requested
        window.location.href = 'my-cats-frodo.html';
      }
    }

  });

  $('#datepicker-start, #datepicker-end').change(function() {
    // Update restricted date ranges in other field
    if ($('#datepicker-start').val()) {
      $('#datepicker-end').datepicker('option', 'minDate', new Date($('#datepicker-start').val()));
    } else {
      $('#datepicker-end').datepicker('option', 'minDate', 0);
    }
    if ($('#datepicker-end').val()) {
      $('#datepicker-start').datepicker('option', 'maxDate', new Date($('#datepicker-end').val()));
    } else {
      $('#datepicker-start').datepicker('option', 'maxDate', null);
    }
  });

  $('#discard-changes-submit').click(function() {
    window.location.href = 'my-cats-frodo.html';
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
    $('#photo-upload').css('visibility', 'visible');

    // http://docs.ckeditor.com/#!/guide/dev_inline
    $('#profile').attr('contenteditable', 'true');
    $('#profile').addClass('editable');
    $('#profile').focus();

    $('#my-phone').attr('contenteditable', 'true');
    $('#my-phone').addClass('editable');

    $('#my-email').attr('contenteditable', 'true');
    $('#my-email').addClass('editable');

    $('#vet-name').attr('contenteditable', 'true');
    $('#vet-name').addClass('editable');

    $('#vet-address-1').attr('contenteditable', 'true');
    $('#vet-address-1').addClass('editable');

    $('#vet-address-2').attr('contenteditable', 'true');
    $('#vet-address-2').addClass('editable');

    $('#vet-phone').attr('contenteditable', 'true');
    $('#vet-phone').addClass('editable');

    $('#edit-profile-button').hide();
    $('#save-profile-button').show();
  });

  $('#save-profile-button').click(function() {
    $('#photo-upload').css('visibility', 'hidden');

    $('#profile').attr('contenteditable', 'false');
    $('#profile').removeClass('editable');

    $('#my-phone').attr('contenteditable', 'false');
    $('#my-phone').removeClass('editable');

    $('#my-email').attr('contenteditable', 'false');
    $('#my-email').removeClass('editable');

    $('#vet-name').attr('contenteditable', 'false');
    $('#vet-name').removeClass('editable');

    $('#vet-address-1').attr('contenteditable', 'false');
    $('#vet-address-1').removeClass('editable');

    $('#vet-address-2').attr('contenteditable', 'false');
    $('#vet-address-2').removeClass('editable');

    $('#vet-phone').attr('contenteditable', 'false');
    $('#vet-phone').removeClass('editable');

    $('#edit-profile-button').show();
    $('#save-profile-button').hide();
    $('#save-profile-button').removeClass('glowing-border');
  });

  $('#edit-schedule-button').click(function() {
    $('#feed').attr('contenteditable', 'true');
    $('#feed').addClass('editable');
    $('#feed').focus();

    $('#edit-feed-units').show();
    $('#edit-feed-units').val($('#feed-units').text());
    $('#feed-units').hide();

    $('#play').attr('contenteditable', 'true');
    $('#play').addClass('editable');

    $('#edit-play-units').show();
    $('#edit-play-units').val($('#play-units').text());
    $('#play-units').hide();

    $('#water').attr('contenteditable', 'true');
    $('#water').addClass('editable');

    $('#edit-water-units').show();
    $('#edit-water-units').val($('#water-units').text());
    $('#water-units').hide();

    $('#litter').attr('contenteditable', 'true');
    $('#litter').addClass('editable');

    $('#edit-litter-units').show();
    $('#edit-litter-units').val($('#litter-units').text());
    $('#litter-units').hide();

    $('#special-care').attr('contenteditable', 'true');
    $('#special-care').addClass('editable');

    $('#edit-schedule-button').hide();
    $('#save-schedule-button').show();
  });

  $('#save-schedule-button').click(function() {
    $('#feed').attr('contenteditable', 'false');
    $('#feed').removeClass('editable');

    $('#edit-feed-units').hide();
    $('#feed-units').html($('#edit-feed-units').val());
    $('#feed-units').show();

    $('#play').attr('contenteditable', 'false');
    $('#play').removeClass('editable');

    $('#edit-play-units').hide();
    $('#play-units').html($('#edit-play-units').val());
    $('#play-units').show();

    $('#water').attr('contenteditable', 'false');
    $('#water').removeClass('editable');

    $('#edit-water-units').hide();
    $('#water-units').html($('#edit-water-units').val());
    $('#water-units').show();

    $('#litter').attr('contenteditable', 'false');
    $('#litter').removeClass('editable');

    $('#edit-litter-units').hide();
    $('#litter-units').html($('#edit-litter-units').val());
    $('#litter-units').show();

    $('#special-care').attr('contenteditable', 'false');
    $('#special-care').removeClass('editable');

    $('#edit-schedule-button').show();
    $('#save-schedule-button').hide();
    $('#save-schedule-button').removeClass('glowing-border');
  });

  // http://jsfiddle.net/vacidesign/ja0tyj0f/
  $('input[type=file]').change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = updateImage;
      reader.readAsDataURL(this.files[0]);
    }
  });
});

// Update the cat photo with the uploaded photo
function updateImage(e) {
  $('#photo').attr('src', e.target.result);
  $('#photo').attr('width', 200);
}
