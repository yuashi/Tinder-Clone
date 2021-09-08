import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://tinder-user:wmcl4XlscJHJHQA6@cluster0.hh0qy.mongodb.net/tinderDB?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

//posting the cards
app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost ${port}`));
