import React, { useState, useEffect } from "react";
import { randomWordGen } from "../utils/api";
import Typer from "./Typer";

export default function Home() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const [hangWord, setHangWord] = useState("");
  // const [userGuessArray, setUserGuessArray] =
  const wordOverSix = async () => {
    const word = await randomWordGen();
    if (word.length >= 6) {
      return setHangWord(word);
    } else {
      wordOverSix();
    }
  };

  if (hangWord === "") {
    wordOverSix();
    if (userGuessArray.length === 0) {
    }
  }
  const splitWord = hangWord.split("");
  const userGuessArray = splitWord.map((letter) => "_");

  return (
    <div>
      <p> {hangWord} </p>
      <main>
        <ul>
          {userGuessArray.map((letter) => {
            return (
              <li key={letter} className='letter'>
                <p> {letter}</p>
              </li>
            );
          })}
        </ul>
      </main>
      <Typer
        input={input}
        setInput={setInput}
        layout={layout}
        setLayout={setLayout}
      />
    </div>
  );
}
