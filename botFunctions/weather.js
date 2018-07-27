const createAnswer = require('../Controller/answerCreationKit');


// let defaultMessage = 'Exchanger is under development, please use only following currencies "dollar, euro, hryvnia"';
const days = [
    [/Monday/i, 'on Monday'],
    [/Tuesday/i, 'on Tuesday'],
    [/Wednesday/i, 'on Wednesday'],
    [/Thursday/i, 'on Thursday'],
    [/Friday/i, 'on Friday'],
    [/Saturday/i, 'on Saturday'],
    [/Sunday/i, 'on Sunday'],
    [/today/i, 'today'],
    [/tomorrow/i, 'tomorrow']
];
const cities = [
    [/Lviv/i, 'Lviv'],
    [/Kyiv/i, "Kyiv"],
    [/Kharkiv/i, "Kharkiv"],
    [/Odessa/i, "Odessa"],
    [/Dnipro/i, "Dnipro"]
];


module.exports = function Weather(msg) {


    let splitedArray = msg.content.toLowerCase().split(' ');
console.log(splitedArray);

    return getDay(splitedArray)
};

function getDay(splitedArray) {
    let day;
    let city;
    for (let i = 0; i < days.length; i++) {
        if (days[i][0].test(splitedArray)) {
            day = days[i][1];

            console.log(day + " this is day");
            break
        }
    }
    for (let i = 0; i < cities.length; i++) {
        if (cities[i][0].test(splitedArray)) {
            city = cities[i][1];

            console.log(city + " this is city");
            break
        }
    }


    return weatherGenerator(city, day)
}

function weatherGenerator(city, day) {
    let answer,
        noun,
        T,
        min = -20,
        max = 30;


    function getRandomArbitrary() {
        T = Math.floor(Math.random() * (max - min) + min);
        return T

    }

    if (T <= 0) {
        noun = 'cold'
    } else if (T >= 10) {
        noun = 'warm'
    } else noun = 'hot';


    answer = `The weather is ${noun} in ${city} ${day}, temperature ${getRandomArbitrary()} C`;
    return createAnswer(answer)

}

