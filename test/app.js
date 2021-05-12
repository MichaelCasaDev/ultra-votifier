const votifier = require('../src/votifier.js');


var options = { // Parse all parameters to send the vote...
    host: "127.0.0.1",
    port: "3000",
    token: "XXXXXXXXXXXXXXXXXX",
    vote: {
        username: "MichaelDevC",
        address: '127.0.0.1',
        timestamp: new Date().getTime(),
        serviceName: "Your service name!"
    }
};

votifier(options, (err) => { // Votifier function
    if (err) { // Check if there's error and log it
        console.log("🚨 Error from send vote function");
    } else {
        console.log("📡 Vote sent to the server  [ " + options.vote.username + " ]");
    };
});
