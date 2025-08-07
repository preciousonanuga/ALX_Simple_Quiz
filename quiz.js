function checkAnswer() {
    // Identify the correct answer to the quiz question
    const correctAnswer = "4";

    // Retrieve the User's Answer (option)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Compare the User's answer to the correct answer
    const feedback = document.getElementById("feedback");

    // if user does not select an option 
    if (!selectedOption) {
        feedback.textContent = "To proceed, you must select the right option";
        feedback.style.color = "#dc3545"  // color red
        return;
    }

    //Comparing with if statements
    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer)  {  
        feedback.textContent = "Correct! Well done."
        feedback.style.color = "#28a745"  // color green
    } else {
        feedback.textContent = "That's incorrect. Try again!"
        feedback.style.color = "#dc3545" // color red
    }
}

document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);