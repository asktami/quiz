const myQuestions = [
    {
      question: "What is the HTML tag under which one can write JavaScript code?",
      answers: {
        a: "<javascript>",
        b: "<scripted>",
        c: "<script>",
        d: "<js>"
      },
      correctAnswer: "c",
      explanation: "Use the 'script' tag to write a JavaScript code under HTML tag."
    },

    question: "Which of the following is the correct syntax to display 'GeeksforGeeks' in an alert box using JavaScript?",
      answers: {
        a: "alertbox('GeeksforGeeks');",
        b: "msg('GeeksforGeeks');",
        c: "msgbox('GeeksforGeeks');",
        d: "alert('GeeksforGeeks');"
      },
      correctAnswer: "d",
      explanation: "To display any text in the alert box, you need to write it as alert('GeeksforGeeks');"
    },
    question: "What is the correct syntax for referring to an external script called 'geek.js'?",
      answers: {
        a: "<script src='geek.js'>",
        b: "<script href='geek.js'>",
        c: "<script ref='geek.js'>",
        d: "<script name='geek.js'>"
      },
      correctAnswer: "a",
      explanation: "The 'src' term is used to refer to any JavaScript file."
    },
    question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
      answers: {
        a: "function = Geekfunc()",
        b: "function Geekfunc()",
        c: "function := Geekfunc()",
        d: "function : Geekfunc()"
      },
      correctAnswer: "b",
      explanation:"In JavaScript, function is defined as 'function x()'"
    },
    question: "How is a function called in JavaScript?",
      answers: {
        a: "call Geekfunc();",
        b: "call function GeekFunc();",
        c: "Geekfunc();",
        d: "function Geekfunc();"
      },
      correctAnswer: "c",
      explanation:" In JavaScript, functions are called directly like x()."
    },
    question: "How to write an ‘if’ statement for executing some code.
If 'i' is NOT equal to 8?",
      answers: {
        a: "if(i<>5)",
        b: "if i<>5",
        c: "if(i!=5)",
        d: "if i!=5"
      },
      correctAnswer: "c",
      explanation:"JavaScript does not accept <> operator as not equal to."
    },
    question: "What is the correct syntax for adding single line comments in JavaScript?",
      answers: {
        a: "<!–This is a comment–&gt",
        b: "//This is a comment",
        c: "–This is a comment",
        d: "**This is a comment**"
      },
      correctAnswer: "b",
      explanation:" Correct Syntax for single line comments in JavaScript is //comment. "
    },
    question: "What is the JavaScript syntax for printing values in Console?",
      answers: {
        a: "print(5)",
        b: "console.log(5);",
        c: "console.print(5);",
        d: "print.console(5);"
      },
      correctAnswer: "b",
      explanation: "The action built into the console object is the .log() method. Whenever we write console.log() in JavaScript code, what we put inside the parentheses will get printed, or logged, to the console."
    },
    question: "How to initialize an array in JavaScript?",
      answers: {
        a: "var Geeks= 'Geek1', 'Geek2', 'Geek3'",
        b: "var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)",
        c: "var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)",
        d: "var Geeks=['Geek1', 'Geek2', 'Geek3']"
      },
      correctAnswer: "d",
      explanation:" In JavaScript, arrays are initialized like []."
    },
    question: "Which of these is NOT a valid Javascript Data Type",
      answers: {
        a: "decimal",
        b: "string",
        c: "object",
        d: "boolean"
      },
      correctAnswer: "a",
      explanation: "Decimal is NOT a valid Javascript Data Type. All numbers, including decimals and negative numbers are of the Number Data Type."
    },
  ];