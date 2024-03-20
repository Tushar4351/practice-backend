//require("dotenv").config();

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

//get a list of jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Math Joke",
      content: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 2,
      title: "Coffee Joke",
      content: "Why did the coffee file a police report? It got mugged.",
    },
    {
      id: 3,
      title: "Gardening Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 4,
      title: "Programming Joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 5,
      title: "Dad Joke",
      content:
        "Why don't skeletons fight each other? They don't have the guts.",
    },
  ];

  res.send(jokes);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
