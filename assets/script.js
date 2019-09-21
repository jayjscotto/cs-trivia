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

    const gameContainer = $('#game-container');
    const introContainer = $('#intro-container');
    const questionDiv = $('#question-div');
    const timerDiv = $('#timer-div');
    const answerDiv = $('#answer-div');

    const csTrivia = {
        //variable to access index of question, choices and answer...
        counter: 1,
        score: 0,
        incorrectAnswers: 0,

        //questions: object property for each question
        questions: {
            question1: 'What year was the first computer invented?',
            question2: 'Which company first developed the Java programming language?',
            question3: "What was the original name for Javascript on it's first release?",
            question4: 'What year was Microsoft Founded?',
            question5: 'A means of encoding text in which each symbol is represented by 16 bits?',
            question6: 'How much memory could the first floppy disc hold?',
            question7: 'How many bytes are in 2 Petabytes?',
            question8: 'A digital circuit capable of holding a single digit?',
            question9: 'What common element is used in the manufacture of computer chips?',
            question10: 'Does the console display every answer to these questions?',
        },

        //choices: possible answers for each question
        choices: {
            choices1: ['1967','1946','1997','1985'],
            choices2: ['Apple','Microsoft','Sun Microsystems','Macintosh'],
            choices3: ['Mocha','LiveScript','ECMAScript','Javascript'],
            choices4: ['1986','2001','1992','1975'],
            choices5: ['ISO','ASCII','Unicode','UTF'],
            choices6: ['80KB','90MB','2MB','1GB'],
            choices7: ['300000','10000000000000000','400000000','10247681290'],
            choices8: ['Letter','Bit','Flip Flop','Key'],
            choices9: ['Graphite','Lead','Silicon','Aluminum'],
            choices10: ['It might', "I've been looking the whole time", 'No!', 'Probably..'],
        },

        //answers: actual single answers for each question
        answers: {
            answer1: '1946',
            answer2: 'Sun Microsystems',
            answer3: 'LiveScript',
            answer4: '1975',
            answer5: 'C',
            answer6: '80KB',
            answer7: '10000000000000000',
            answer8: 'A',
            answer9: 'Silicon',
            answer10: "I've been looking the whole time",
        },

        //picks question from question object, appends to question div
        generateQuestion() {
            questionDiv.empty();
            questionDiv.append(Object.values(this.questions)[this.counter]);
        },

        //adds buttons with corresponding possible answers to the page
        generateChoices() {
            let choicesArr = Object.values(this.choices)[this.counter];
            for (let i = 0; i < 4; i++) {
                let choiceButton = '<div class="col text-left ml-3"> <a class="btn btn-primary answer-choice btn-lg mx-auto my-3" href="#" role="button">' + choicesArr[i] + '</a> </div>';
                answerDiv.append(choiceButton);
            }
            this.counter++;
        },

        //reset to set score/incorrect #s back to 0 and empty divs
        reset() {
            questionDiv.empty();
            timerDiv.empty();
            answerDivFirst.empty();
            answerDivSecond.empty();
            introContainer.show();
        }
    }

    $('#play-game').on('click', function() {
        csTrivia.generateQuestion();
        introContainer.hide();
        csTrivia.generateChoices();
    });

    $(document).on('click', '.answer-choice', function() {
        //if button clicked contains the right answer
        if ($(this).html() === Object.values(csTrivia.answers)[csTrivia.counter]) {
            csTrivia.score++;
            console.log('score: ' + csTrivia.score);
            answerDiv.empty();
            csTrivia.generateQuestion();
            csTrivia.generateChoices();
        } else if (timer = 0) {
            //timer runs out
            answerDiv.empty();
            csTrivia.incorrectAnswers++;
            csTrivia.generateQuestion();
            csTrivia.generateChoices();
        } else {
            answerDiv.empty();
            csTrivia.incorrectAnswers++;
            csTrivia.generateQuestion();
            csTrivia.generateChoices();
        }
    });

$(document).ready(function() {

})