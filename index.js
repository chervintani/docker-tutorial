const express = require("express");
const redis = require("redis");
const port = process.env.PORT || 8080;
const app = express();
const client = redis.createClient({
  host: 'redis-server',
});

client.set('visits',0);

app.get("/", (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  })
  // res.send("<h1>Im live from containers2222223</h1>")
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));