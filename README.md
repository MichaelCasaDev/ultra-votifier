# Ultra Votifier
 Backend votifier system made in Node.JS! Compatible with Votifier V2

## How to use
```bash
cd node_modules && git clone https://github.com/MichaelDevC/ultra-votifier.git
```

```js
const votifier = require('ultra-votifier');


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
        console.log("📡 Vote sent to the server  [ " + "MichaelDevC" + " ]");
    };
});
```

## Votifier Plugin
[Download here!](https://www.spigotmc.org/resources/nuvotifier.13449/)

## License
[GNU General Public License v3.0](https://github.com/MichaelDevC/ultra-votifier/blob/main/LICENSE)
