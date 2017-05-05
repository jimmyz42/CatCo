if(window.sessionStorage.getItem('posts') === null) {
  window.sessionStorage.setItem('posts', JSON.stringify(original_post_content));
}
var post_content = JSON.parse(window.sessionStorage.getItem('posts'));

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
          
          post_container.append('<button class="btn btn-default add-post" section="' +section_cnt + '"><span class="glyphicon glyphicon-plus"></span> Add Post</button>');
          section_cnt++; 
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

$(document).on('click', '.add-post', function() {
  var section = $(this).attr('section');
  var post_container = $('#section' + section);
  var post = $('<div class="post"></div>').appendTo(post_container); 
  var post_title = $('<input type="text" class="form-control post-title" placeholder="Post Title"></input>').appendTo(post);
  var post_body = $('<textarea class="form-control post-body" rows="5" placeholder="Post Content"></textarea>').appendTo(post);
  var post_cancel = $('<button class="btn btn-danger post-cancel"><span class="glyphicon glyphicon-remove"></span> Cancel</button>').appendTo(post);
  var post_submit = $('<button class="btn btn-success post-submit"><span class="glyphicon glyphicon-ok"></span> Post!</button>').appendTo(post);

  post_cancel.click(function() {
    post_container.append('<button class="btn btn-default add-post" section="' + this.section + '"><span class="glyphicon glyphicon-plus"></span> Add Post</button>');
    post.remove();
  }.bind( {section: section} ));

  post_submit.click(function() {
    var newpost_obj = {
      title: post_title.val(),
      author: window.sessionStorage.getItem('name'),
      text: post_body.val(),
    };
    post_content[Object.keys(post_content)[this.section]].push(newpost_obj);
    window.sessionStorage.setItem('posts', JSON.stringify(post_content));

    var newpost = $('<div class="post"></div>').appendTo(post_container);
    newpost.append('<span class="title">' + newpost_obj.title + '</span>');
    newpost.append('<span class="author">' + newpost_obj.author + '</span>');
    newpost.append('<br><p>' + newpost_obj.text + '</p>');

    post_container.append('<button class="btn btn-default add-post" section="' + this.section + '"><span class="glyphicon glyphicon-plus"></span> Add Post</button>');
    post.remove();
  }.bind( {section: section }));

  $(this).remove();
});












