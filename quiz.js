// Questions
const questions = [
    {   
        image: "Quiz_Img/pexels-pixabay-37403.jpg",
        question: "Which option best represents the percentage of earth's oxygen prooduced by the ocean?",
        options: ["0%", "30%", "50%", "95%"],
        correct_answer: "50%",
        feedback: "According to many studies conducted, at least 50% of Earth's oxygen is produced by the ocean. The main contributing factor are tiny organisms called phytoplankton. However, there has been a decline in these organisms globally due to factors such as climate change, pollution, over-fishing, which can have devastating consequences."
    },
    {
        image: "Quiz_Img/pexels-jeremy-bishop-1260133-2397651.jpg",
        question: "Which of the following option represents the major threat to marine biodiversity?",
        options: ["Overfishing", "Climate Change", "Plastic(s)", "All of the above"],
        correct_answer: "All of the above",
        feedback: "The answer is all of the above. These issues and more are mainly a result of human impact, and have harmed and devasted ecosystems all around the world. It is projected that in a few decades, the damages will be irreversible." + 
        "<ul><ol>Here are some methods to help lessen the impact:</ol><li>Reduce Plastic Consumption: Use reusable bags, bottles, and containers. </li><li>Reduce Carbon Footprint: Use renewable energy resources and by reducing car travel by biking or using public transportation</li><li>Conserve Water: Reduce water consumption by taking shorter showers, or using less water in general to reduce energy and greenhouse gas emissions.</li></ul>"
    },
    {
        image: "Quiz_Img/pexels-yogendras31-2480807.jpg",
        question: "What percentage of marine pollution comes from land-based sources?",
        options: ["30%", "50%", "60%", "80%"],
        correct_answer: "80%",
        feedback: "Over 80% of marine pollution comes from land based sources. These include: <li>Industrial waste from corporations leaking toxic chemicals, and other materials into waterways, destroying ecosystems. This is creating an alarming amount of deadzones where marine life can't live, due to the oxygen content.</li> <li>Plastic: Plastic items such as straws, bags, bottles, have had an innumerable impact on marine life</li>"
    },
    {
        image: "Quiz_Img/pexels-catherinesheila-2409022.jpg",
        options: ["1 million tons", "8 million tons", "15 million tons", "30 million tons"],
        correct_answer: "8 million tons",
        feedback: "It is estimated that 8 million tons of plastic waste enter the ocean each year. <ol>We can reduce this through:</ol> <li>Using reusable items</li> <li>Reducing the use of single-use plastics</li>"
    },
    {
        image: "Quiz_Img/pexels-npandey-2446439.jpg",
        question: "What percentage of global fish stocks are overexploited?",
        options: ["10%", "30%", "60%", "90%"],
        correct_answer: "60%",
        feedback: "Approximately, over 60% of global fish stocks are fully exploited or overexploited, threatening the sustainability of marine resources. Sustainable fishing practices are necessary to preserve marine life as 30% of marine life are endangered."
    }
];

//Array at 0
let currentQuestion = 0;

displayQuestion(); 

function displayQuestion() {
    const question = questions[currentQuestion];
    const quizContainer = document.getElementById('quiz_container');
    quizContainer.innerHTML = 
    `<h3>${question.question}</h3>
    <img src="${question.image}" alt="Image for Question" class="question_img">
    <br>
        ${question.options.map(function(option) {
            return `<button class="btn btn-outline-success option-btn">${option}</button>`;
        }).join('')}`;
    
    // Event listeners for the options
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const selectedOption = button.textContent;
            //if correct, print correct in front.
            if (selectedOption == question.correct_answer) {
                showFeedback("Correct! " + question.feedback);
            } else {
                showFeedback("Incorrect. " + question.feedback);
            }
        });
    });
}

function showFeedback(feedback) {
    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.style.display = 'block';
    feedbackContainer.innerHTML = `<p>${feedback}</p>`;
}

document.getElementById('next-btn').addEventListener('click', function() {
    // Hides the feedback after the user clicks the Next button
    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.style.display = 'none';

    // Keeps iterating to the next question in array until it can use the showFinal function 
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showFinal();
    }
});


//Reset the quiz
function showFinal() {
    const resultsContainer = document.getElementById('results_container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = 
    `<h3>You've completed the quiz!</h3>
    <p>Congratulations on finishing the quiz! I hope you've learned more about life below water. If you would like to take the quiz again, please press the button below?</p>
    <button id="retry-btn" class="btn btn-outline-success">Take Quiz Again</button>`;
    
    document.getElementById('retry-btn').addEventListener('click', function() {
        currentQuestion = 0;
        resultsContainer.style.display = 'none';
        displayQuestion();
    }); 
}

