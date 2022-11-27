import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😋": "Savoring Food",
  "😊": "Smiling",
  "😑": "Expressionless",
  "😎": "Cool face",
  "😒": "Unamused",
  "😪": "Sleepy",
  "😐": "Neutral",
  "😅": "Sweaty Face",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😛": "Face with Tongue",
  "😔": "Pensive Face",
  "😷": "Face with Medical Mask",
  "😕": "Confused Face",
  "😮": "Face with Open Mouth",
  "😢": "Crying Face",
  "😱": "Face Screaming in Fear",
  "😠": "Angry Face",
  "😩": "Weary Face",
  "😞": "Disappointed Face",
  "😖": "Confounded Face",
  "😭": "Loudly Crying Face",
  "😨": "Fearful Face",
  "😧": "Anguished Face",
  "😫": "Tired Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === null) {
      meaning = "we don't have this in our database";
    } else if (meaning === "") {
      meaning = "";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="Enter an Emoji to know its meaning"
        onChange={emojiInputHandler}
      />
      <h2> {meaning} </h2>
      <h3> Click on any Emoji below to know its meaning </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "3rem",
              padding: "1rem",
              cursor: "pointer",
              height: "2rem"
            }}
            key={emoji}
            id="emoji"
          >
            {emoji}
          </span>
        );
      })}
      <footer style={{ padding: "2.5rem" }}>
        <div className="end">Made with 💛 by Manisha Gajula</div>
      </footer>
    </div>
  );
}
