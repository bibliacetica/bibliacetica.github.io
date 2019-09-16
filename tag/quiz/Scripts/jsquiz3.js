(function() {
  var questions = [{
    question: "1 - A quem Paulo chamou de 'meu companheiro de lutas'?",
    choices: ['Apolo', 'Arquipo', 'Áfia'],
    correctAnswer: 1
  }, {
     question: "Quais discípulos perguntaram a Jesus se podiam fazer descer fogo do céu?",
    choices: ['João e Tiago', 'Pedro e João', 'Tiago e Pedro'],
    correctAnswer: 0
  }, {
     question: "Qual era o nome da serpente de bronze que Moisés tinha feito?",
    choices: ['Aserá', 'Leviatã','Neustã'],
    correctAnswer: 2
  }, {
     question: "Qual era o nome babilônico de Daniel?",
     choices: ['Aspenaz', 'Beltessazar', 'Abede-Nego'],
     correctAnswer: 1

       },{
    question: "Qual o nome que Jacó deu ao lugar onde sonhou com Deus?",
    choices: ['Be­tuel',  'Luz', 'Betel'],
    correctAnswer: 2
  }, {
     question: "Qual o livro da Bíblia que termina com um ponto de interrogação?",
    choices: ['Jonas', 'Joel', 'Judas'],
    correctAnswer: 0
  },  {
     question: "Qual livro se encontra no Novo Testamento?",
    choices: ['Sofonias',  'Filemom','Habacuque'],
    correctAnswer: 1
  }, {
     question: "Em quais livros da Bíblia não encontramos a palavra 'Deus'?",
    choices: ['Ester e Cânticos', 'Ageu e Amós', 'Oséias e Eclesiastes'],
    correctAnswer: 0
  }, {
     question: " Qual o menor livro da Bíblia?",
    choices: ['Judas', 'II João','III João'],
    correctAnswer: 1
  }, {
     question: "Na visão profética de João qual era o número de cavaleiros do Apocalipse?",
     choices: ['7', '4', '5'],
     correctAnswer: 1

       },{
    question: " Quem escreveu a Epístola de Judas?",
    choices: ['Judas irmão de Tiago',  'Judas Iscariotes', 'João Evangelista'],
    correctAnswer: 0
  }, {
     question: "Quem teve seu corpo disputado pelo arcanjo Miguel e o Diabo?",
    choices: ['Jesus', 'Judas', 'Moisés'],
    correctAnswer: 2
  },  {
     question: "Qual era o nome da profetiza que estava fazendo a igreja de Tiatira cair em imoralidade sexual e idolatria?",
    choices: ['Jezabel',  'Lilith','Dalila'],
    correctAnswer: 0
  }, {
     question: "A Morte montada em um cavalo amarelo surgiu na abertura de qual selo em Apocalipse?",
    choices: ['1º selo', '7º selo', '4º selo'],
    correctAnswer: 2
  }, {
     question: "Quem foi a única mulher citada na Bíblia a ter o status de juíza e líder de Israel?",
    choices: ['Jael', 'Débora','Ester'],
    correctAnswer: 1
  }, {
     question: "A quem o Apóstolo Paulo chamou de 'médico amado'?",
     choices: ['Jesus', 'Demas', 'Lucas'],
     correctAnswer: 2

       },{
    question: "Quem governou sendo rei e sacerdote ao mesmo tempo?",
    choices: ['Joacaz',  'Melquisedeque', 'Manassés'],
    correctAnswer: 1
  }, {
     question: "Qual era a idade de Calebe quando pediu Hebrom para Josué?",
    choices: ['40 anos', '85 anos', '120 anos'],
    correctAnswer: 1
  },  {
     question: "Qual era a idade de Calebe quando pediu Hebrom para Josué?",
    choices: ['30 moedas de ouro',  '30 moedas de prata','100 denários'],
    correctAnswer: 1
  },  {
     question: "Quem foram apelidados por Jesus de Boanerges que significa 'Filhos do Trovão'?",
    choices: ['João e Pedro',  'João e Tiago','Pedro e Tiago'],
    correctAnswer: 1
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
    
    var header = $('<h2>Pergunta ' + (index + 1) + ':</h2>');
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