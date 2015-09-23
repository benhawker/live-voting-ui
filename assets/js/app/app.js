// $( document ).ready(function() {}

    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher('8881c0f8a42807b64625', {
      encrypted: true
    });
    var channel = pusher.subscribe('test_channel');
      channel.bind('new_message', function(data) {
      title = data.questionTitle;
      questionNumber = data.questionNumber;
      // updateQuestion(title);
      // var questionTitle = $('#question-title');
      $('#question-title').text(title);
      $('#question-number').text(questionNumber);


    });




    // function updateToDoList(){
    //   var toDoLister = '';
    //   var item;
    //   for (item in toDo.toDoList) {
    //       toDoLister
    //       +="<li class='to-do-item'>"
    //       +toDo.toDoList[item]
    //       +"<button class='tick' onclick='addToDoneList(\""
    //       +toDo.toDoList[item]
    //       +"\")'>"
    //       +"x"
    //       +"</li>";
    //   }
    // 	document.getElementById('to-do-list').innerHTML = toDoLister;
    // };
// });
