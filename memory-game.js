let emojiSets = [
    ["🍕", "🍕", "🍦", "🍦", "🎸", "🎸", "🚀", "🚀"],
    ["🐶", "🐶", "🐱", "🐱", "🦊", "🦊", "🐻", "🐻"],
    ["🌸", "🌸", "🍁", "🍁", "☀️", "☀️", "🌙", "🌙"]
];

let currentSetIndex = 0;
let lastCelebration = null;  // Menyimpan animasi terakhir
let cardsArray = [...emojiSets[currentSetIndex]];
let gameBoard = document.getElementById("gameBoard");
let selectedCards = [];
let matchedPairs = 0;
let celebrationTypes = ["fireworks", "confetti", "balloons"];

function shuffleCards(array) {
    return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
    gameBoard.innerHTML = "";
    matchedPairs = 0;
    selectedCards = [];
    let shuffledCards = shuffleCards([...cardsArray]);

    shuffledCards.forEach(symbol => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.innerHTML = "❓";
        card.addEventListener("click", () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (selectedCards.length < 2 && !card.classList.contains("matched")) {
        card.innerHTML = card.dataset.symbol;
        selectedCards.push(card);
        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    if (selectedCards[0].dataset.symbol === selectedCards[1].dataset.symbol) {
        selectedCards.forEach(card => card.classList.add("matched"));
        matchedPairs++;
        if (matchedPairs === cardsArray.length / 2) {
            showSuccessMessage();
        }
    } else {
        selectedCards.forEach(card => card.innerHTML = "❓");
    }
    selectedCards = [];
}

function showSuccessMessage() {
    let message = document.createElement("div");
    message.classList.add("success-message");
    message.innerText = "Berhasil!";
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
        showCelebration();
    }, 2000);
}

function getRandomCelebration() {
    let availableCelebrations = celebrationTypes.filter(c => c !== lastCelebration);
    let newCelebration = availableCelebrations[Math.floor(Math.random() * availableCelebrations.length)];
    lastCelebration = newCelebration;
    return newCelebration;
}

function showCelebration() {
    let celebrationContainer = document.getElementById("celebration");
    celebrationContainer.innerHTML = "";
    celebrationContainer.style.display = "block";

    let randomCelebration = getRandomCelebration();

    if (randomCelebration === "fireworks") {
        for (let i = 0; i < 8; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = Math.random() * 100 + "vw";
            firework.style.top = Math.random() * 50 + "vh";
            celebrationContainer.appendChild(firework);
            setTimeout(() => firework.remove(), 1500);
        }
    } else if (randomCelebration === "confetti") {
        for (let i = 0; i < 30; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            celebrationContainer.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }
    } else {
        for (let i = 0; i < 15; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = Math.random() * 100 + "vw";
            celebrationContainer.appendChild(balloon);
            setTimeout(() => balloon.remove(), 5000);
        }
    }

    setTimeout(() => {
        celebrationContainer.style.display = "none";
    }, 3000);
}

function retryGame() {
    currentSetIndex = (currentSetIndex + 1) % emojiSets.length;
    cardsArray = [...emojiSets[currentSetIndex]];
    createBoard();
}

function goBack() {
    window.location.href = "game1.html";
}

function nextGame() {
    window.location.href = "game3.html";
}

createBoard();