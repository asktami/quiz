'use strict';

const myQuestions = [
	{
		question: 'What is the HTML tag under which one can write JavaScript code?',
		answers: {
			a: '&lt;javascript&gt;',
			b: '&lt;scripted&gt;',
			c: '&lt;script&gt;',
			d: '&lt;js&gt;'
		},
		correctAnswer: 'c',
		explanation: "Use the 'script' tag to write a JavaScript code."
	},
	{
		question:
			"Which of the following is the correct syntax to display 'GeeksforGeeks' in an alert box using JavaScript?",
		answers: {
			a: "alertbox('GeeksforGeeks');",
			b: "msg('GeeksforGeeks');",
			c: "msgbox('GeeksforGeeks');",
			d: "alert('GeeksforGeeks');"
		},
		correctAnswer: 'd',
		explanation:
			"To display any text in the alert box, you need to write it as alert('GeeksforGeeks');"
	},
	{
		question:
			"What is the correct syntax for referring to an external script called 'geek.js'?",
		answers: {
			a: "&lt;script src='geek.js'&gt;",
			b: "&lt;script href='geek.js'&gt;",
			c: "&lt;script ref='geek.js'&gt;",
			d: "&lt;script name='geek.js'&gt;"
		},
		correctAnswer: 'a',
		explanation: "The 'src' term is used to refer to any JavaScript file."
	},
	{
		question:
			'What is the syntax for creating a function in JavaScript named as Geekfunc?',
		answers: {
			a: 'function = Geekfunc()',
			b: 'function Geekfunc()',
			c: 'function := Geekfunc()',
			d: 'function : Geekfunc()'
		},
		correctAnswer: 'b',
		explanation: "In JavaScript, function is defined as 'function x()'"
	},
	{
		question: 'How is a function called in JavaScript?',
		answers: {
			a: 'call Geekfunc();',
			b: 'call function GeekFunc();',
			c: 'Geekfunc();',
			d: 'function Geekfunc();'
		},
		correctAnswer: 'c',
		explanation: 'In JavaScript, functions are called directly like x().'
	},
	{
		question:
			"How to write an 'if' statement for executing some code. If 'i' is NOT equal to 5?",
		answers: {
			a: 'if(i&lt;&gt;5)',
			b: 'if i&lt;&gt;5',
			c: 'if(i!=5)',
			d: 'if i!=5'
		},
		correctAnswer: 'c',
		explanation: 'JavaScript does not accept &lt;&gt; operator as not equal to.'
	},
	{
		question:
			'What is the correct syntax for adding single line comments in JavaScript?',
		answers: {
			a: '&lt; !-This is a comment- &gt;',
			b: '//This is a comment',
			c: '-This is a comment',
			d: '**This is a comment**'
		},
		correctAnswer: 'b',
		explanation:
			' Correct Syntax for single line comments in JavaScript is //comment. '
	},
	{
		question: 'What is the JavaScript syntax for printing values in Console?',
		answers: {
			a: 'print(5)',
			b: 'console.log(5);',
			c: 'console.print(5);',
			d: 'print.console(5);'
		},
		correctAnswer: 'b',
		explanation:
			'The action built into the console object is the .log() method. Whenever we write console.log() in JavaScript code, what we put inside the parentheses will get printed, or logged, to the console.'
	},
	{
		question: 'How to initialize an array in JavaScript?',
		answers: {
			a: "let Geeks= 'Geek1', 'Geek2', 'Geek3'",
			b: 'let Geeks=(1:Geek1, 2:Geek2, 3:Geek3)',
			c: 'let Geeks=(1=Geek1, 2=Geek2, 3=Geek3)',
			d: "let Geeks=['Geek1', 'Geek2', 'Geek3']"
		},
		correctAnswer: 'd',
		explanation: ' In JavaScript, arrays are initialized like [].'
	},
	{
		question: 'Which of these is NOT a valid Javascript Data Type',
		answers: {
			a: 'decimal',
			b: 'string',
			c: 'object',
			d: 'boolean'
		},
		correctAnswer: 'a',
		explanation:
			'Decimal is NOT a valid Javascript Data Type. All numbers, including decimals and negative numbers are of the Number Data Type.'
	}
];

/*
// Pseudocode
1 - DEFAULT: see the start page with FIRST PAGE message & the START button

2 - user clicks START button = render the quiz question to the screen & score & page X of Y and SHOW the SUBMIT button

3 - user clicks the SUBMIT button = render the quiz question to the screen WITH user answer & correct answer & score & page X of Y, and SHOW the CONTINUE BUTTON

4 - user clicks the CONTINUE button = render the NEXT quiz question to the screen & score & page X of Y and SHOW the SUBMIT button

5 - user clicks CONTINUE button on LAST page, see LAST PAGE message with RESTART button & & score and SHOW the RESTART button

6 - user clicks RESTART button =  see DEFAULT (#1)
*/

// QUESTION - how to do: when 1st load page need
// $('#message h2').html('Welcome to the Javascript Quiz');

// keep track of questionIndex
let questionIndex = 0;

// keep track of all correct answers
let numCorrect = 0;

// start quiz
// load question index 0
function startQuiz() {
	$('main').on('click', '.start', function(event) {
		$('#message').hide();
		renderQuestion('submit');
	});
}

// user clicks restart
// reload page to restart quiz

// **QUESTION = why doesn't the RESTART button work?
// MAIN _is_ in the DOM when the page 1st loads
function restartQuiz() {
	$('main').on('click', '.restart', function(event) {
		location.reload(true);
	});
}



// **QUESTION - why do I get on last page: Form submission canceled because the form is not connected AFTER click CONTINUE on last RESULTS page IF I use g???
// **QUESTION - why does #message not work, but main works??? (except see above)
// tried div#message, #message AND replaceWith

function renderLastPage() {
alert('renderLastPage');
		$('main').html(`
      <h2>Final Score: Score: ${numCorrect} out of ${myQuestions.length}</h2>
      <button type="button" class="restart">Restart Quiz</button>`);
}


// user clicks continue from the results screen
// increment questionIndex
// render next question
function renderNextQuestion() {
	$('main').on('click', '.continue', function(event) {
		// if (questionIndex === myQuestions.length-1) {
		if (questionIndex === 0) {
		
		alert('lastpage');
			// show last page with last page text & restart button
			renderLastPage();
			
		} else {
			questionIndex += 1;
			renderQuestion('submit');
		}
	});
}

function renderResults() {
	// show results
	// show question & answers again with results (correct-answer & user-answer)
	// disable input radio buttons

	// using MAIN on click submit ignores REQUIRED
	// $('main').on('click', '.submit', function(event) {

	// using this DOES NOT WORK, WHY?
	// ANSWER b/c #submit-form' does not exist when page 1st loads
	//$('#submit-form').on('submit', function (event) {

	$('.js-quiz-container').on('submit', '#submit-form', function(event) {
		// stop the default form submission behavior
		event.preventDefault();

		// find submitted answer
		// used required so user can not submit form without selecting an answerOption
		let userAnswer = $("input[name='answer']:checked").val();

		// save answer submitted as new property on currentQuestion
		let currentQuestionObj = myQuestions[questionIndex];
		currentQuestionObj.userAnswer = userAnswer;

		// update numCorrect/js-score
		if (currentQuestionObj.correctAnswer === userAnswer) {
			numCorrect += 1;
		}

		console.log('`renderResults` ran');

		// render results with continue button
		renderQuestion('continue', userAnswer);
	});
}


function renderQuestion(btn = 'start', userAnswer = '') {
	// only show question and answerOptions if NOT on START page
	// if answer was submitted, show which was answer was submitted
	// if answer was submitted, disable changing answer/selecting another radio button
	
	if(btn === 'start'){
		$('#message').html(`
      <h2>Welcome to the Javascript Quiz</h2>
      <button type="button" class="start">Start Quiz</button>`);
      }
            
	if (btn !== 'start') {
		// store the HTML output
		let output = [];

		// for this question store the list of answer options
		let currentQuestion = myQuestions[questionIndex];

		const answerOptions = [];
		let correctAnswerClass = '';
		let userAnswerClass = '';
		let disabled = btn === 'continue' ? 'disabled' : '';

		let checked = '';

		let explanation = userAnswer !== '' ? currentQuestion.explanation : '';

		// for each of the possible answers add an HTML radio button
		// add correct-answer class to answerOptions
		// add user-answer class to answerOptions
		for (let option in currentQuestion.answers) {
			// only when showing results
			if (btn === 'continue') {
				if (option === currentQuestion.correctAnswer) {
					correctAnswerClass = 'correct-answer';
				} else {
					correctAnswerClass = '';
				}
				if (option === userAnswer) {
					userAnswerClass = 'user-answer';

					// add checked to the checked radio button
					checked = 'checked';
				} else {
					userAnswerClass = '';
					checked = '';
				}
			}

			answerOptions.push(
				`<label for="answer_${option}">
      <input type="radio" name="answer" id="answer_${option}" value="${option}" ${disabled} ${checked} required>${option}:&nbsp;&nbsp;${
					currentQuestion.answers[option]
				}<span class="warning ${userAnswerClass}"></span><span class="warning ${correctAnswerClass}"></span></label>`
			);
		}

		let banner = `
		<div class="banner">
			<span class="js-questionsAnswered">Question: ${questionIndex + 1} out of ${
			myQuestions.length
		}</span>
			<span class="js-score">Score: ${numCorrect} out of ${myQuestions.length}</span>
		</div>`;

		let form = `<form id="${btn}-form" name="quiz-form" action="index.html" method="post">`;

		let legend = `<legend>
			  <h3><span>${questionIndex + 1}.</span> ${currentQuestion.question}</h3>
			</legend>`;

		// add this question and its answers to the output
		output.push(
			`${banner}

			 ${form}

			<fieldset>
			 ${legend}

			<ul class="answers">
			<li data-question-id="${questionIndex}">
				${answerOptions.join('')}
			</li>
			</ul>

			<div class="explanation">${explanation}</div>

			<button class="${btn}" type="submit">${btn}</button>
		</fieldset>
		</form>`
		);

		// insert the final HTML into the DOM
		$('.js-quiz-container').html(output.join(''));
	}
	console.log(`renderQuestion(${btn}) ran`);
}

// this function is our callback when the page loads. it's responsible for initially rendering the quiz, and activating our individual functions that handle  clicks on the "start", "submit", "continue" and "restart" buttons.
function processQuiz() {
	startQuiz();
	renderQuestion();
	renderResults();
	renderNextQuestion();
}

// when the page loads, call `processQuiz`
$(processQuiz);
