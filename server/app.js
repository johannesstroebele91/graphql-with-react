const express = require("express");
const { graphqlHTTP } = require("express-graphql"); // {} enables to destructure only certain objects of the complete express package
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// Create express app
const app = express();

// Mongoose enables to easily connect the express app with the MongoDB
const CONNECTION_URL =
  "mongodb+srv://admin:admin@cluster0.5urt9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL);
mongoose.connection.once("open", () => {
  console.log("Connection to database has been established");
});

/* Setup supercharged endpoint
 * by using a middleware
 * The graphHTTP function will fire
 * based on the request comes in
 * and handle the request */
app.use(
  "/graphql",
  graphqlHTTP({
    schema, // or long: schema: schema
    graphiql: true,
  })
);

const port = 5000;

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
