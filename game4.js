let numberToGuess;
const answerMap = {
    1: "Karena kamu adalah yang pertama di hatiku.",
    2: "Karena hanya kita berdua yang bisa melengkapi satu sama lain.",
    3: "Karena kamu, aku, dan cinta kita adalah trio yang sempurna.",
    4: "Karena kita berdua adalah pasangan yang tak terpisahkan.",
    5: "Karena kamu adalah lima alasan aku tersenyum setiap hari.",
    6: "Karena kamu membuat dunia ini terasa lebih seimbang.",
    7: "Karena kamu adalah keberuntungan yang datang dalam hidupku.",
    8: "Karena kita berdua adalah kebahagiaan yang saling berputar.",
    9: "Karena cintaku padamu tak terbatas.",
    10: "Karena denganmu, aku merasa sempurna, 10 di hatiku."
};

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const feedback = document.getElementById('feedback');
    const questionContainer = document.getElementById('question-container');
    const retryButton = document.getElementById('retry-button');
    const nextGameButton = document.getElementById('next-game-button');
    const whyButton = document.getElementById('why-button');

    if (guess == numberToGuess) {
        feedback.textContent = "Tebakanmu benar!";
        feedback.classList.remove('hidden', 'wrong');
        feedback.classList.add('correct');
        showCelebration();

        questionContainer.classList.remove('hidden');
        document.getElementById('question-text').textContent = `Kamu tahu nggak kenapa angka yang kamu tebak ${numberToGuess}?`;
        whyButton.classList.remove('hidden');
        retryButton.classList.remove('hidden');
        nextGameButton.classList.remove('hidden');
    } else {
        feedback.textContent = "Salah, coba lagi!";
        feedback.classList.remove('hidden', 'correct');
        feedback.classList.add('wrong');
    }
}

function showCelebration() {
    const celebrationContainer = document.getElementById('celebration');
    celebrationContainer.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = ["#ff69b4", "#3498db", "#f1c40f", "#e74c3c"][Math.floor(Math.random() * 4)];
        celebrationContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
    celebrationContainer.classList.remove('hidden');
}

function showAnswer() {
    const answerText = document.getElementById('answer');
    answerText.textContent = answerMap[numberToGuess];
    answerText.classList.remove('hidden');
}

function retryGame() {
    numberToGuess = generateRandomNumber();
    document.getElementById('guess').value = '';
    document.querySelectorAll('.hidden').forEach(el => el.classList.add('hidden'));
}

function nextGame() {
    alert("Lanjut ke game berikutnya!");
}

numberToGuess = generateRandomNumber();