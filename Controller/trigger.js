
module.exports = function trigger(message) {
    let Trigger = '@bot',
        triggered = false;
    if (message.content.includes(Trigger)) {


        triggered = true;

    }

    return triggered;
};


