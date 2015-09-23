$( document ).ready(function() {

    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

   var questionTitle = $('#question-title')

    var pusher = new Pusher('8881c0f8a42807b64625', {
      encrypted: true
    });
    var channel = pusher.subscribe('test_channel');
    channel.bind('my_event', function(data) {
      alert(data.message);
      title = data.questionTitle
      updateQuestion(title);
    });


});