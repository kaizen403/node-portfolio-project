<? php include 'header.php'; ?>
    <div class="welcome"><h1>  ⚘  Welcome to my blog  ⚘ </h1></div>
    <div class="container">
        <div class="post1">
            <img src="imgs/b1.jpg" alt="">
            <div class="view">
                <div class="caption"><h1>WHY AM I DOING THIS BLOG?</h1></div>
                <br><p>I am just doing this because i need soem experience in nodejs and want to expreiment new stuff so figured out why not just add a user specific tasks just as commenting.</p>
                <form class="pure-form" id="comment-form">

                    <div class="comment-form">
                  
                        <div class="left-side">
                  
                             <div class="row">
                  
                                 <input type="text" required placeholder="enter your name" id="new_comment_name">
                  
                                 <input placeholder="Enter valid email" required type="email" id="new_comment_email">
                  
                              </div>
                  
                              <div class="row">
                  
                                  <textarea placeholder="Enter comment text" required id="new_comment_text" rows="3"></textarea>
                  
                              </div>
                  
                        </div>
                  
                       <div class="right-side">
                  
                              <button type="submit" class="button-secondary pure-button">Send Comment</button>
                  
                       </div>
            </div>
        </div>
        
    </div>
    <script type="text/javascript" src="./app.js"></script>
    <script type="text/javascript" src="https://js.pusher.com/3.2/pusher.min.js"></script>
</body>
</html>