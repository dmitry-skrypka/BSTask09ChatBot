const createAnswer = require('../Controller/answerCreationKit');


let defaultMessage = 'Exchanger is under development, please use only following currencies "dollar, euro, hryvnia"';

module.exports = function Exchanger(msg) {


    let splittedArray = msg.content.toLowerCase().split(' '),
        data = {
            amount: splittedArray[2],
            fromCurrency: splittedArray[3],
            toCurrency: splittedArray[5]
        };

    let answer = currencyType(data);
    return createAnswer(answer);
};

function currencyType(data) {
    switch (data.fromCurrency) {
        case 'dollar':
            return FromDollar(data);
        case 'euro':
            return FromEuro(data);
        case 'hryvnia':
            return FromHryvnia(data);
        default:
            return defaultMessage;
    }
}

function FromDollar(data) {
    switch (data.toCurrency) {
        case 'euro':
            return `${data.amount} dollars = ${data.amount * 0.8} ${data.toCurrency}`;
        case 'hryvnia':
            return `${data.amount} dollars = ${data.amount * 26} ${data.toCurrency}`;
        default:
            return defaultMessage;
    }
}

function FromEuro(data) {
    switch (data.toCurrency) {
        case 'dollar':
            return `${data.amount} euro = ${data.amount * 1.16} ${data.toCurrency}`;
        case 'hryvnia':
            return `${data.amount} euro = ${data.amount * 31} ${data.toCurrency}`;
        default:
            return defaultMessage;
    }
}

function FromHryvnia(data) {
    switch (data.toCurrency) {
        case 'dollar':
            return `${data.amount} hryvnia = ${data.amount * 27} ${data.toCurrency}`;
        case 'euro':
            return `${data.amount} hryvnia = ${data.amount * 32} ${data.toCurrency}`;
        default:
            return defaultMessage;
    }

}