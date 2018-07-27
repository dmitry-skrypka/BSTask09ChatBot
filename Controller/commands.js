
module.exports = commands = [
    [/What is the weather/i, 'weather'],
    [/Convert/i, 'currency'],
    [/Save note/i, 'note'],
    [/Show note list/i, 'note'],
    [/Show note/i, 'note'],
    [/Delete/i, 'note'],
    [/show quote/i, 'quote'],
    [/.+[#@)₴?$0]$/i, 'advise'],
    [/^@bot?.+/i, 'random']
];

