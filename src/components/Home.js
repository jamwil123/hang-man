import React, { useState, useEffect } from "react";
import { randomWordGen } from "../utils/api";
import Typer from "./Typer";

export default function Home() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const [hangWord, setHangWord] = useState("");
  const [userGuessArray, setUserGuessArray] = useState([])


  const wordOverSix = async () => {
    const word = await randomWordGen();
    if (word.length >= 6) {
        setHangWord(word)
        let splitWord = word.split("")
        return setUserGuessArray(()=>{
            return splitWord.map((item)=>{ return "_"})
        });
    } else {
      wordOverSix();
    }
  };

  if (hangWord === "") {
    wordOverSix();
    if (userGuessArray.length === 0) {
    }
  }
 

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
