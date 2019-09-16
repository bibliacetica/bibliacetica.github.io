(function() {
  var questions = [{
    question: "<IMG SRC='img/n1.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 3
  }, {
     question: "<IMG SRC='img/r7.gif' style='width:100px; height:150px;'>",
    choices: [ 'Alegria', 'Desprezo','Raiva', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 2
  }, {
     question: "<IMG SRC='img/m1.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 4
  }, {
    question: "<IMG SRC='img/a1.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img/t1.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 5
  }, {
     question: "<IMG SRC='img/d1.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 2
	
  }, {
     question: "<IMG SRC='img/s1.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Surpreza', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
	
  }, {
     question: "<IMG SRC='img/r2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 0
  }, {
     question: "<IMG SRC='img/m2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 4
  }, {
    question: "<IMG SRC='img/a2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img/t2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 5
  }, {
     question: "<IMG SRC='img/d2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 2
	
  }, {
     question: "<IMG SRC='img/s2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Surpreza', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
	
  }, {
     question: "<IMG SRC='img/r2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 0
  }, {
     question: "<IMG SRC='img/m2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 4
  }, {
    question: "<IMG SRC='img/a2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
  }, {
     question: "<IMG SRC='img/t2.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 5
  }, {
     question: "<IMG SRC='img/d3.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Alegria', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 2
	
  }, {
     question: "<IMG SRC='img/s3.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Surpreza', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 1
	
  }, {
     question: "<IMG SRC='img/m4.gif' style='width:100px; height:150px;'>",
    choices: ['Raiva', 'Surpreza', 'Desprezo', 'Nojo', 'Medo','Tristeza'],
    correctAnswer: 4
	
  }];
  
    


  questions.sort();
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
    var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
	  document.getElementById("next").click();
    
},1000);
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Selecione um item!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
	  window.location.reload();
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();

	$('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
	  document.getElementById("radio1").checked = true;
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Emoção ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
	  timeleft=10;
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
		 
		
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
	  timeleft=99999;
    var score = $('<p>',{id: 'Pergunta'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('Voce acertou ' + numCorrect + ' perguntas de ' +
                 questions.length + ' !!!');
			
    return score;
	
	
	
  }
})();