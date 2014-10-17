function View() {
  this.insertQuestion= function(template) {
  //   var counter = 1;
  //   $('<input type="text" class="question_' + counter + '" placeholder="Question" name="question_' + counter + '"> <input type="text" class="choice" placeholder="Choice A" name="choice_text_1a">').insertBefore("button.new-question")
  // },
    var rendered = Mustache.render(template);

  this.insertChoice= function() {
    $('input.choice').clone().insertBefore("button.new-question")
  }
};