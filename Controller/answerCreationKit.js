module.exports = function createAnswer(answer) {
    const message = {
        date: new Date(),
        content: answer,
        username: 'Chatbotto'
    };


    return message
};