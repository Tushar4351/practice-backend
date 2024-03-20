import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Joke {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    axios
      .get<Joke[]>("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <>
      <h1>Hello Its Tushar</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
