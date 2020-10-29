module.exports = (name) => {
    if(!name) throw new Error("No username provided.");
    return Object.values(require('./data.json')).map(d => d.url.replace("{}", name));
}