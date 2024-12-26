// Example code for creating a basic quiz app in JavaScript

// HTML Structure (embed this in your HTML file)
/*
<div id="quizContainer">
    <div id="question">質問がここに表示されます</div>
    <div id="options">
        <button class="option" onclick="selectOption(0)">選択肢 1</button>
        <button class="option" onclick="selectOption(1)">選択肢 2</button>
        <button class="option" onclick="selectOption(2)">選択肢 3</button>
    </div>
    <button id="nextButton" onclick="nextQuestion()">次へ</button>
    <div id="result">結果がここに表示されます</div>
    <div id="explanation">解説がここに表示されます</div>
</div>
*/

// JavaScript Code
const quizData = [
    {
        question: "フランスの首都はどこですか？",
        options: ["ベルリン", "マドリード", "パリ"],
        correct: 2,
        explanation: "パリはフランスの首都であり、芸術、ガストロノミー、文化で知られています。"
    },
    {
        question: "赤い惑星として知られる惑星はどれですか？",
        options: ["地球", "火星", "木星"],
        correct: 1,
        explanation: "火星は表面に酸化鉄が含まれているため、赤っぽく見えることから赤い惑星と呼ばれています。"
    },
    {
        question: "『アラバマ物語』を書いたのは誰ですか？",
        options: ["ハーパー・リー", "マーク・トウェイン", "アーネスト・ヘミングウェイ"],
        correct: 0,
        explanation: "『アラバマ物語』はハーパー・リーによって書かれた現代アメリカ文学の古典です。"
    },
    {
        question: "甲子園球場を本拠地とする野球チームは？",
        options: ["読売巨人軍", "阪神タイガース", "広島東洋カープ"],
        correct: 1,
        explanation: "甲子園球場は阪神タイガースの本拠地として知られています。"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    document.getElementById('result').textContent = '';
    document.getElementById('explanation').textContent = '';
}

function selectOption(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        document.getElementById('result').textContent = '正解！';
    } else {
        document.getElementById('result').textContent = '不正解...';
    }
    document.getElementById('explanation').textContent = currentQuestion.explanation;
    document.querySelectorAll('.option').forEach(option => {
        option.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.querySelectorAll('.option').forEach(option => {
            option.disabled = false;
        });
    } else {
        document.getElementById('quizContainer').innerHTML = `<h2>クイズ終了！</h2><p>あなたのスコアは ${score} / ${quizData.length} です。</p>`;
    }
}

// Initialize quiz
loadQuestion();
