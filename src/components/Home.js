import React from "react";
import { randomWordGen } from "../utils/api";

export default function Home() {
  const wordOverSix = async () => {
    const word = await randomWordGen();
    console.log(word, "<<<<<");
    if (word.length >= 6) {
    } else {
      wordOverSix();
    }
  };
  const test = wordOverSix();

  return <div>{test}</div>;
}
