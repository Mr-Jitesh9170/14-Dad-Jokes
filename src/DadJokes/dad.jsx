import { useState } from "react"
import "./dad.scss"
export const DadJokes = () => {
  const [jokes, setJokes] = useState("click Button to get Jokes!")
  const GetJokes = async () => {
    try {
      let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch joke. Status: ${response.status}`);
      }
      let jokeData = await response.json();
      let joke = jokeData.joke;
      setJokes(joke)
    } catch (error) {
      console.error("Error fetching dad joke:", error.message);
      return null;
    }
  };
  return (
    <div className="dad-jokes-container">
      <p>Don't Lough 😂 Challenge!!</p>
      <h3>{jokes}</h3>
      <button onClick={GetJokes}>Get Another 🤣Joke</button>
    </div >
  )
}

 