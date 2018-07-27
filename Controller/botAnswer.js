const randomBotAnswers = require('../botFunctions/randomAnswers');
const adviseBotAnswers = require('../botFunctions/advises');
const quoteBotAnswers = require('../botFunctions/quotes');
const exchanger = require('../botFunctions/currencies');
const weatherBot = require('../botFunctions/weather');
const notes = require('../botFunctions/notes');


module.exports = class BotAnswer {


    selector(command, message) {

        let answer;
        switch (command) {
            case 'weather':
                answer = weatherBot(message);
                break;
            case 'currency':

                answer = exchanger(message);
                break;
            case 'note':
                answer = notes(message);
                break;
            case 'quote':
                answer = quoteBotAnswers();
                break;
            case 'advise':
                answer = adviseBotAnswers();

                break;

            default:
                answer = randomBotAnswers();

        }

        return answer
    }


};