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
      <p style={styles.subtitle}>
        Click letters (or use your keyboard) to build text.
      </p>

      <input
        type="text"
        value={text}
        placeholder="Your text will appear here..."
        readOnly
        style={styles.input}
        data-testid="output-area" 
      />

      
      <button style={styles.backspace} onClick={handleBackspace}>
        Backspace
      </button>

       
      <div style={styles.buttonsContainer}>
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => addLetter(letter)}
            style={styles.letterButton}
            data-testid="alphabet-button"  
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
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "80%",
    padding: "14px",
    fontSize: "18px",
    marginTop: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  backspace: {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "10px 16px",
    fontSize: "15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  buttonsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "center",
    margin: "20px auto",
    gap: "15px",
  },
  letterButton: {
    padding: "18px 22px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    cursor: "pointer",
    width: "60px",
    textAlign: "center",
    background: "white",
  },
};
