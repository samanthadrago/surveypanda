function View() {
  var question_counter = 2;
  var choice_counter = 2;

  this.insertQuestion= function() {

    $('<br><label for="question">Question:</label> <input type="text" class="question_' + question_counter + '" placeholder="Question" name="question_' + question_counter + '"> <br><button class="new-choice" type="button">Add New Choice</button><br>').insertAfter("button.new-question");
    question_counter += 1

  },
    // var rendered = Mustache.render(template);

  this.insertChoice= function() {
    $('<label for="choice">Choice:</label><input type="text" class="choice_' + choice_counter + '" placeholder="Choice" name="choice_' + choice_counter + '"><br>').insertBefore("button.new-choice");
    choice_counter += 1
  },

  this.update= function(question_class) {
    $("div." + question_class + "> select").hide();
    $("div." + question_class + "> button").hide();
    $("div." + question_class).append("<div><span>Thanks for voting!</span></div>");
  }


};