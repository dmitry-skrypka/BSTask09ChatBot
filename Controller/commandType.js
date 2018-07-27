const commands = require('./commands');


module.exports = function commandType(message) {
    let commandment;

    let UserMessage = message.content.toString();
    for (let i = 0; i < commands.length; i++) {

        if (commands[i][0].test(UserMessage)) {
            commandment = commands[i][1];

            console.log(commands[i][1] + " this is command")
            break
        }

    }

    return commandment.toString()


};