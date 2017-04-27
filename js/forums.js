$(function() {

  showContent();

  $('#list-all').click(function() {
    $('.post-container').remove();
    showContent();
  });

  $('#search').change(function() {
    $('.post-container').remove();
    if($('#search').val() === '') showContent();
    else searchContent($('#search').val());
  });

  function searchContent(word) {
    var posts = _.reduce(post_content, function(result, value, key) {
      return result.concat(value);
    }, []).filter(function(post) {
      return (post.title + ' ' + post.text).match(new RegExp('\\b' + word + '\\b', 'i'));
    });

    var container = $('<div class="row post-container"></div>').appendTo('.main');
    var section = $('<div class="col-sm-12 section"></div>').appendTo(container);
    section.append('<span class="section-title">Search Results: "' + word + '"</span>'); 

    for(var i=0; i<posts.length; i++) {
      var post = $('<div class="post"></div>').appendTo(section);
      post.append('<span class="title">' + posts[i].title + '</span>');
      post.append('<span class="author">' + posts[i].author + '</span>');
      post.append('<br><p>' + posts[i].text + '</p>');
    }
  }

  function showContent() {
        var section_cnt = 0;
        for(section_name in post_content) {
          section_cnt++;

          var container = $('<div class="row post-container"></div>').appendTo('.main');
          var section = $('<div class="col-sm-12 section"></div>').appendTo(container);
          var header = $('<div data-toggle="collapse" data-target="#section' + section_cnt + '"></div>').appendTo(section);
          header.append('<span class="section-title">' + section_name + '</span>');
          header.append('<button class="down-menu btn btn-xs btn-default" data-toggle="collapse" data-target="#section' + section_cnt + '"><span class="glyphicon glyphicon-menu-down updown"></span></button>');
          var post_container = $('<div class="panel-collapse collapse" id="section' + section_cnt + '"></div>').appendTo(section);

          var posts = post_content[section_name];
          for(var i=0; i<posts.length; i++) {
            var post = $('<div class="post"></div>').appendTo(post_container);
            post.append('<span class="title">' + posts[i].title + '</span>');
            post.append('<span class="author">' + posts[i].author + '</span>');
            post.append('<br><p>' + posts[i].text + '</p>');
          }
        }

      $('.collapse').on('show.bs.collapse', function() {
        $(this).parent().find('.updown').removeClass('glyphicon-menu-down');
        $(this).parent().find('.updown').addClass('glyphicon-menu-up');
      });
      $('.collapse').on('hide.bs.collapse', function() {
        $(this).parent().find('.updown').addClass('glyphicon-menu-down');
        $(this).parent().find('.updown').removeClass('glyphicon-menu-up');
      });
  }
});
