// Импорт библиотек
const SpeechKit = window.SpeechKit; // Инициализация SpeechKit SDK

// Определение элементов DOM
const micButton = document.getElementById('micButton');
const transcription = document.getElementById('transcription');

// Переменные для управления распознаванием речи
let isRecognizing = false;
let recognitionSession = null; // Сессия распознавания речи

// Функция для запуска/остановки распознавания речи
function toggleRecognition() {
    if (isRecognizing) {
        recognitionSession.stop();
    } else {
        startRecognition();
    }

    isRecognizing = !isRecognizing;
}

// Функция для инициализации и запуска распознавания речи
function startRecognition() {
    // Создаем объект SpeechKit SpeechRecognition
    const speechRecognition = new SpeechKit.SpeechRecognition({
        apiKey: 'AQVN20WeobG1pp1EWfAMEzP_emo7f5Edf30OCdqm' // Замените на ваш API-ключ
    });

    // Обрабатываем события распознавания речи
    speechRecognition.on('recognitionResult', (result) => {
        transcription.textContent += result.text;
    });

    speechRecognition.on('finished', () => {
        micButton.style.backgroundColor = '#007bff'; // Сброс цвета кнопки
    });

    speechRecognition.onError = (error) => {
        console.error('Ошибка распознавания речи:', error);
    };

    // Запускаем сессию распознавания речи
    recognitionSession = speechRecognition.start();
}

// Обработка события `click` кнопки микрофона
micButton.addEventListener('click', toggleRecognition);
