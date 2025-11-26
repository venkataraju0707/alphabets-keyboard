import React, { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Alphabet Buttons</h1>
      <p style={styles.subtitle}>
        Click letters (or use your keyboard) to build text.
      </p>

      <input
        value={text}
        readOnly
        placeholder="Type here..."
        style={styles.input}
      />

      <button
        style={styles.backspace}
        onClick={() => setText((prev) => prev.slice(0, -1))}
      >
        Backspace
      </button>

      <div style={styles.grid}>
        {letters.map((l) => (
          <button
            key={l}
            style={styles.letterBtn}
            onClick={() => setText((prev) => prev + l)}
          >
            {l}
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
    background: "#f8f9fc",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  input: {
    width: "80%",
    padding: "15px",
    fontSize: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  backspace: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#e6e6e6",
    cursor: "pointer",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(13, 1fr)",
    gap: "15px",
    padding: "0 40px",
  },
  letterBtn: {
    padding: "15px",
    background: "white",
    borderRadius: "12px",
    border: "1px solid #ddd",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};
