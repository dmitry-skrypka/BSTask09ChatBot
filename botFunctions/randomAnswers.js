const createAnswer = require('../Controller/answerCreationKit');
const randomAnswers = [
    'The shooter says goodbye to his love',
    'She was too short to see over the fence',
    'I love eating toasted cheese and tuna sandwiches',
    'She advised him to come back at once.'


];


module.exports = function randomBotAnswers() {
    let answer = randomAnswers[Math.floor(Math.random() * randomAnswers.length)];
    return createAnswer(answer)
};






