// 1. Создаем списки (в JS они называются массивами)
const colors = ["красный", "зелёный", "синий"];
const phrases = ['Определённо {}', 'Мой любимый цвет — {}'];

// 2. Находим элементы на HTML-странице по их ID
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const botAnswer = document.getElementById('bot-answer');

// 3. Создаем функцию, которая срабатывает при отправке вопроса
function askBot() {
    // Получаем текст из инпута (и убираем лишние пробелы по краям)
    const text = userInput.value.trim().toLowerCase();
    
    if (text === "") return; // Если поле пустое, ничего не делаем

    // Проверяем, есть ли слово "цвет" в тексте (как твой `if "цвет" in a:`)
    if (text.includes("цвет")) {
        // Выбираем случайный цвет и фразу (аналог random.choice)
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        
        // Меняем {} на выбранный цвет (аналог .format())
        const finalResult = randomPhrase.replace("{}", randomColor);
        
        // Выводим текст на экран
        botAnswer.textContent = finalResult;
    } else {
        // Твой блок else
        botAnswer.textContent = 'Я могу говорить только о моём любимом цвете!';
    }
    
    // Очищаем поле ввода для следующего вопроса
    userInput.value = "";
}

// 4. Привязываем функцию к кнопке (клик мышкой)
sendBtn.addEventListener('click', askBot);

// 5. Бонус: сделаем так, чтобы код срабатывал и при нажатии клавиши Enter
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        askBot();
    }
});
