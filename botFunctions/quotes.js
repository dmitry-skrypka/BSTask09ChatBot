const createAnswer = require('../Controller/answerCreationKit');
const quotes = [
    'You cannot shake hands with a clenched fist.\n' +
    'Indira Gandhi',
    'There is nothing permanent except change.\n' +
    'Heraclitus',
    'The supreme art of war is to subdue the enemy without fighting.\n' +
    'Sun Tzu',
    'Independence is happiness.\n' +
    'Susan B. Anthony',
    'Tread softly because you tread on my dreams.\n' +
    'W. B. Yeats',
    'Keep your face always toward the sunshine - and shadows will fall behind you.\n' +
    'Walt Whitman'


];


module.exports = function quoteBotAnswers() {
    let answer = quotes[Math.floor(Math.random() * quotes.length)];
    console.log('hello')

    return createAnswer(answer)
};
