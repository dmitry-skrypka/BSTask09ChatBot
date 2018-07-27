const createAnswer = require('../Controller/answerCreationKit');
const advises = [
    'Homework Block? Take a walk',
    'Love Many, Trust Few, Always Paddle Your Own Canoe',
    'In Case of Fire, Use Stairs',
    'Fun advice #427 :)',
    'Don\'t Give Up Your Dreams'


];


module.exports = function adviseBotAnswers() {
    let answer = advises[Math.floor(Math.random() * advises.length)];
    console.log('hello')

    return createAnswer(answer)
};
