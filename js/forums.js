      $(function() {
        var section_cnt = 0;
        for(section_name in post_content) {
          section_cnt++;

          var container = $('<div class="row post-container"></div>').appendTo('.main');
          var section = $('<div class="col-sm-12 section"></div>').appendTo(container);
          section.append('<span class="section-title">' + section_name + '</span>');
          section.append('<button class="down-menu btn btn-xs btn-default" data-toggle="collapse" data-target="#section' + section_cnt + '"><span class="glyphicon glyphicon-menu-down"></span></button>');
          var post_container = $('<div class="panel-collapse collapse" id="section' + section_cnt + '"></div>').appendTo(section);

          var posts = post_content[section_name];
          for(var i=0; i<posts.length; i++) {
            var post = $('<div class="post"></div>').appendTo(post_container);
            post.append('<span class="title">' + posts[i].title + '</span>');
            post.append('<span class="author">' + posts[i].author + '</span>');
            post.append('<br><p>' + posts[i].text + '</p>');
          }
        }
      });
