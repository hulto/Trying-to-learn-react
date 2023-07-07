// server.js
const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const cors = require('cors');

const PORT = 8080;

app.use(cors());

app.get("/users", async (req, res) => {
    const cypher = "MATCH (p:Person {name: $name }) RETURN count(p) AS count";
    const params = {name: "Adam"};
    let aoeu = connectDb.run(cypher, params)
    console.log(aoeu)
    // connectDb.cypherQuery("MATCH (person:Person) RETURN person", function (err, results) {
    //   if (err) return next(err);
    //   res.json(result.data);
    // });
  });
    
app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  // connectDb.then(() => {
  //   console.log("Neo4j connected");
  // });
});