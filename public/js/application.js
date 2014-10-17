$(document).ready(function() {
  // assign click handler to new question button
  view = new View();
  $(".new-question").on("click", view.insertQuestion);
  $(".survey-form").on("click", ".new-choice", view.insertChoice);
  $(".take-survey").on("click", ".vote-button", vote);


});

var vote= function(event) {
		// debugger;
	  var $target = $(event.target);
	  var answer = $target.closest('div').find('select').val()
	  var question_class = $target.closest('div').attr('class');
	  var question_id = question_class.slice(9)
	  // debugger;
    var ajaxCall = $.ajax({
      url: '/results/create',
      type: 'POST', 
      data: {answer: answer}
      });
    // debugger;
    ajaxCall.done(view.update(question_class))
  }

// function vote(e) {
//   e.preventDefault()

//   var $thingo = $.ajax({
//     type: "get",
//     url: e.target.href
//   })


//   $thingo.done(voteSuccess);
//   $thingo.fail(failure);
// }


// var voteSuccess = function (response) {

//   obj = JSON.parse(response);
//   var points = obj.points;
//   var post_id = obj.post_id;
//   var thing = $("#" + post_id + "> p > span.points");
//   thing.html(points);

//   var button = $("#" + post_id + "> a");
//   button.css("color", "red")
//   // button.delay(5000).css("color", "#8C8C8C")
// }


// function failure(response) {
//   console.log("fail");

// }

// function deletePost(e) {
//   e.preventDefault()

//   var $request = $.ajax({
//     type: "delete",
//     url: e.target.href
//   })


//   $request.done(deleteSuccess);
//   $request.fail(failure);
// }

// function deleteSuccess(response) {
//   obj = JSON.parse(response);
//   var post_id = obj.post_id;
//   var thing = $("#" + post_id);
//   thing.remove();
// }

// function newPost(e) {
//   e.preventDefault();
//   var info = $('form').serialize;
//   var $request = $.ajax({
//   type: "post",
//   url: '/posts',
//   data: info
//   })

//   $request.done(createSuccess);
//   $request.fail(failure);
// }

// function createSuccess(response) {
//   // obj = JSON.parse(response);
//   // var post_id = obj.post_id;
//   // var points = obj.points;
//   // var timestamp = obj.timestamp;
//   // var author = obj.author;
//   // var comments = obj.comments;
//   // var article =
// }

// <article id="<%= post.id %>">
//       <a href='/posts/<%= post.id %>/vote' class="fa fa-sort-desc vote-button"></a>
//       <h2><a href='/posts/<%= post.id %>'><%= post.title %></a></h2>
//       <p>
//         <span class='points'><%= post.points %></span>
//         <span class='username'><%= post.username %></span>
//         <span class='timestamp'><%= post.time_since_creation %></span>
//         <span class='comment-count'><%= post.comment_count %></span>
//         <a class="delete" href='/posts/<%= post.id %>'></a>
//       </p>
//     </article>