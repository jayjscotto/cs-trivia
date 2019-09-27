//INTRO Screen
//when play game button is clicked... begin game:

    //User clicks Play Game button
        //game container is emptied and replaced with:
            //First trivia question
            //Timer
            //Possible Answers as buttons


    //counter variable is initialized

    //Question generation:
    //FUNCTION:
        //question div is emptied
        //Question is generated from question object (`object.values()`) with counter variable
        //append question to question div
        //counter is incremented every time a new question is appended

    //Answer generation:
    //FUNCTION:
        //for loop to loop four times
            //append <a> element to 
            //add class attribute of "btn answer btn-primary btn-lg mx-auto" for bootstrap styling

        //for loop iterating over answers object array
            //object.values()
            //append one answer to one button

    //User Answers the question
        //class selector on class 'answer' click event handler
        //FUNCTION:
            //Correct Answer or Incorrect Answer variable is incremented
    
    //Repeat for each question

    //Once all questions have been answered-- RESULTS SCREEN
        //Give user results:
            //Questions answered Correctly
            //Questions answered incorrectly

        //Give option to reset/restart game
        //Give option to check out the code on github

$(document).ready(function() {
    const introContainer = $('#intro-container');
    const questionDiv = $('#question-div');
    const timerDiv = $('#timer-div');
    const answerDiv = $('#answer-div');
    const scoreDiv = $('#score');
    const incorrect = $('#incorrect');
    const reset = $('#reset');

    let time = 16;
    let counter = 0;

    const csTrivia = {
        //variable to access index of question, choices and answer...
        score: 0,
        incorrectAnswers: 0,

        questions : [
            {question: 'What year was the first computer invented?',
            choices: ['1967','1946','1997','1985'],
            answer: ['1946'],
            },

            {question: 'Which company first developed the Java programming language?',
             choices: ['Apple','Microsoft','Sun Microsystems','Netscape '],
             answer: ['Sun Microsystems'],
            },

            {question: "What was the original name for Javascript on it's first release?",
             choices: ['Mocha','LiveScript','ECMAScript','Javascript'],
             answer: ['LiveScript'],
            },

            {question: "What year was Microsoft Founded?",
             choices: ['1986','2001','1992','1975'],
             answer: ['1975'],
            },

            {question: 'A means of encoding text in which each symbol is represented by 16 bits?',
             choices: ['ISO','ASCII','Unicode','UTF'],
             answer: ['ASCII'],
            },

            {question: 'How much memory could the first floppy disc hold?',
             choices: ['80KB','90MB','2MB','1GB'],
             answer: ["80KB"],
            },

            {question: 'How many bytes are in 2 Petabytes?',
             choices: ['300000','10000000000000000','400000000','10247681290'],
             answer: ['10000000000000000'],
            },

            {question: 'A digital circuit capable of holding a single digit?',
             choices: ['Letter','Bit','Flip Flop','Key'],
             answer: ['Flip Flop'],
            },

            {question: 'What common element is used in the manufacture of computer chips?',
             choices: ['Graphite','Lead','Silicon','Aluminum'],
             answer: ['Silicon'],
            },

            {question: 'Does the console display every answer to these questions?',
             choices: ['It might', "I've been looking the whole time", 'No!', 'Probably..'],
             answer: ["I've been looking the whole time"],
            }],

        //shuffle function
        //takes in array as parameter
        //for loop that iterates over each index
            //assigns a random index to that item with the placeholder and j variables
            //Fisher Yates method
        shuffle(array) {
            let i = 0;
            let j = 0;
            let placeholder = null;

            for (let i = array.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                placeholder = array[i];
                array[i] = array[j];
                array[j] = placeholder;
            }
            return array;
        },

        //// BEGIN TIMER LOGIC
        timerRunning: false,
        timer: '',

        //starts the timer
        startTimer() {
            if (!this.timerRunning) {   
                this.timer = setInterval(this.count, 1000);
                this.timerRunning = true;
            }
        },

        count() {
            time--;
            $('#timer-div').text(':' + time);
            if(time < 10) {
                $('#timer-div').text(':0' + time);
            }
            if(time === 0) {
                csTrivia.stopTimer();
                csTrivia.incorrectAnswers++;
                counter++;
                csTrivia.generateQuestion();
                csTrivia.generateChoices();
            }
        },

        stopTimer() {
            clearInterval(this.timer);
            this.timerRunning = false;
            time = 15;
        },

        //// END TIMER LOGIC

        //picks question from question object, appends to question div
        generateQuestion() {
            questionDiv.empty();
            questionDiv.append(Object.values(this.questions[counter].question));
            this.startTimer();
        },

        //adds buttons with corresponding possible answers to the page
        generateChoices() {
            answerDiv.empty();
            let choicesArr = Object.values(this.questions[counter].choices);
            for (let i = 0; i < 4; i++) {
                let choiceButton = '<div class="row text-center"> <a class="btn btn-primary answer-choice btn-lg mx-auto my-3" href="#" role="button">' + choicesArr[i] + '</a> </div>';
                answerDiv.append(choiceButton);
            }
        },

        //displays stats and reset button to restart game;
        endGame() {
            //empty divs
            questionDiv.empty();
            answerDiv.empty();
            timerDiv.empty();
            //toggle score stats:
            scoreDiv.toggle();
            incorrect.toggle();
            //set stats & reset button content
            let gameOver = $('<h1>');
            gameOver.text('Game Over:').attr('class', 'text-center');

            let finalScore = $('<h2>');
            finalScore.text('Correct Answers: ' + this.score).attr('class', 'text-center');

            let wrongAnswers = $('<h2>');
            wrongAnswers.text('Incorrect Answers: ' + this.incorrectAnswers).attr('class', 
            'text-center');

            let resetBtn = '<div class="col text-left mx-auto"> <a id="reset" class="btn btn-danger answer-choice btn-lg mx-auto my-3" href="#" role="button"> Try Again? </a> </div>'

            //append stats and reset button to appropriate location
            questionDiv.append(gameOver);
            scoreDiv.append(finalScore);
            incorrect.append(wrongAnswers);
            reset.append(resetBtn);
        },

        //reset to set score/incorrect #s back to 0 and empty divs
        reset() {
            this.score = 0;
            this.incorrectAnswers = 0;
            counter = 0;
            this.playGame();
        },

        //beings game;
        playGame() {
            csTrivia.shuffle(csTrivia.questions);
            scoreDiv.toggle();
            incorrect.toggle();
            csTrivia.generateQuestion();
            introContainer.detach();
            csTrivia.generateChoices();
        }

    }

    //button click listener to play game on intro page
    $('#play-game').on('click', csTrivia.playGame);

    $(document).on('click', '.answer-choice', function evaluateAnswer() {
            csTrivia.stopTimer();
            
            console.log(csTrivia.questions[counter].answer[0]);

            //if button clicked contains the right answer
            if ($(this).html() === csTrivia.questions[counter].answer[0] && counter < 9) {
                csTrivia.score++;
                counter++;
                csTrivia.generateQuestion(); 
                csTrivia.generateChoices();
            }
            else if ($(this).html() != csTrivia.questions[counter].answer[0] && counter < 9) {
                csTrivia.incorrectAnswers++;
                counter++;
                csTrivia.generateQuestion();
                csTrivia.generateChoices();
            }
            else if (counter >= 9) {
                csTrivia.endGame();
            }
        });

    $(document).on('click', '#reset', function () {
        csTrivia.reset();
        scoreDiv.empty();
        incorrect.empty();
        reset.empty();
    });

    
})