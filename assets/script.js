//INTRO Screen
//when play game button is clicked... begin game:

    //User clicks Play Game button
        //game container is emptied and replaced with:
            //First trivia question
            //Timer
            //Possible Answers as buttons
        
    //Timer starts 

    //timer initialized
        //FUNCTION
        //set up timer
        //timer set to 00:00
        //append timer to timer div
    
    //timer starts counting
        //FUNCTION

    //time coverter
        //FUNCTION


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
            //total time elapsed during the questions

        //Give option to reset/restart game
        //Give option to check out the code on github

//TODO:
    //whole game container
    //play game button
    //answer buttons
    //
    //list of questions
    //

    const gameContainer = $('#game-container');
    const introContainer = $('#intro-container');
    const questionDiv = $('#question-div');
    const timerDiv = $('#timer-div');
    const answerDiv = $('#answer-div');

    const csTrivia = {
        //variable to access index of question, choices and answer...
        counter: 0,

        //questions: object property for each question
        questions: {question1: 'What year was the first computer invented?',
                    question2: 'Which company first developed the Java programming language?',
                    question3: 'What was the original name for Javascript?',
                    question4: 'What year was Microsoft Founded?',
                    question5: 'What does the acronym W3C represent?',
                    question6: 'How much memory could the first floppy disc hold?',
                    question7: 'How many bytes are in 2 Petabytes?',
                    question8: 'Intel or AMD?',
                    question9: 'What common element is used in the manufacture of computer chips?',
                    question10: 'Does the console display every answer to these questions?',

        },

        //choices: possible answers for each question
        choices: {
            choices1: ['A','B','C','D'],
            choices2: ['A','B','C','D'],
            choices3: ['A','B','C','D'],
            choices4: ['A','B','C','D'],
            choices5: ['A','B','C','D'],
            choices6: ['A','B','C','D'],
            choices7: ['A','B','C','D'],
            choices8: ['A','B','C','D'],
            choices9: ['A','B','C','D'],
            choices10: ['It might', "I've been looking the whole time", 'No!', 'Probably..'],
        },

        //answers: actual single answers for each question
        answers: {
            answer1: 'A',
            answer2: 'B',
            answer3: 'C',
            answer4: 'D',
            answer5: 'C',
            answer6: 'B',
            answer7: 'A',
            answer8: 'A',
            answer9: 'Silicon',
            answer10: "I've been looking the whole time",
        },

        //picks question from question object, appends to question div
        generateQuestion() {
            console.log(Object.values(this.questions)[this.counter]);
            questionDiv.append(Object.values(this.questions)[this.counter]);

        },

        //finds corresponding 
        generateChoices() {
            let choicesArr = Object.values(this.choices)[this.counter];
            console.log(choicesArr);
            for (let i = 0; i < 5; i++) {
                answerDiv.append(choicesArr[i]);
            }
        },

        answerQuestion(){

        },
            //reset function to empty divs
        reset() {
            questionDiv.empty();
            timerDiv.empty();
            answerDivFirst.empty();
            answerDivSecond.empty();
        }
    }

    $('#play-game').on('click', function() {
        csTrivia.generateQuestion();
        introContainer.hide();
        csTrivia.generateChoices();
    });

    $('.answer').on('click', function() {
        csTrivia.answerQuestion();
    });



$(document).ready({
    
}) 