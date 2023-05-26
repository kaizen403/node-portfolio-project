const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1607598",
  key: "8c896394d17827d68886",
  secret: "b82a1662d5f3dc06e277",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

application.post('/comment', (req, res)=>{
  console.log(re.body);
  var newComment={
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  }
  pusher.trigger('flash-comments', 'new_comment', newComment);
  res.json({created: true})
})