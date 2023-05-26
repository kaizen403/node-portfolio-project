
var commentForm = document.getElementById('comment-form');

// Adding to Comment Form Submit Event
commentForm.addEventListener("submit", addNewComment);



() => {
    var serverUrl = "/",

        comments = [],

        pusher = new Pusher('8c896394d17827d68886', {

          cluster: 'ap2',

          encrypted: true

        }),

        // Subscribing to the 'flash-comments' Channel

        channel = pusher.subscribe('flash-comments')
    };

    function addNewComment(event){
        event.preventDefault();
        var newComment = {
          "name": document.getElementById('new_comment_name').value,
          "email": document.getElementById('new_comment_email').value,
          "comment": document.getElementById('new_comment_text').value
        }
  
        var xhr = new XMLHttpRequest();
        xhr.open("POST", serverUrl+"comment", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
          if (xhr.readyState != 4 || xhr.status != 200) return;
  
          // On Success of creating a new Comment
          console.log("Success: " + xhr.responseText);
          commentForm.reset();
        };
        xhr.send(JSON.stringify(newComment));
  }
  