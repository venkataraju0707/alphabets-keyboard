import React, { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toUpperCase();

      if (letters.includes(key)) {
        setText((prev) => prev + key);
      }

      if (e.key === "Backspace") {
        setText((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const addLetter = (letter) => {
    setText((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Alphabet Buttons</h1>
      <p style={styles.subtitle}>Click letters (or use your keyboard) to build text.</p>

      {/* Cypress expects .output to be readable with contain() */}
      <div className="output" style={styles.outputBox}>
        {text}
      </div>

      <button
        className="backspace"    // ✔ required for Cypress
        style={styles.backspace}
        onClick={handleBackspace}
      >
        Backspace
      </button>

      <div style={styles.buttonsContainer}>
        {letters.map((letter) => (
          <button
            key={letter}
            className="key"  // ✔ Cypress uses this!
            onClick={() => addLetter(letter)}
            style={styles.letterButton}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
  },
  title: { fontSize: "36px", fontWeight: "bold", marginBottom: "5px" },
  subtitle: { fontSize: "16px", color: "#555", marginBottom: "25px" },

  outputBox: {
    width: "80%",
    minHeight: "40px",
    padding: "14px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    background: "#fff",
    textAlign: "left",
  },

  backspace: {
    padding: "10px 16px",
    fontSize: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "30px",
  },

  buttonsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    margin: "20px auto",
    gap: "15px",
    justifyContent: "center",
  },
  letterButton: {
    padding: "18px 22px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    cursor: "pointer",
    background: "#fff",
    width: "60px",
    textAlign: "center",
  },
};
