import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // See ./capture_the_flag/parse.js for the script used to get the URL in Step 2
  const FLAG_URL =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6f7263";
  const DELAY = 500;

  useEffect(() => {
    fetch(FLAG_URL)
      .then((res) => res.text())
      .then((data) => {
        setFlag(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading && charIndex < flag.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, DELAY);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, flag, isLoading]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {flag
            .slice(0, charIndex)
            .split("")
            .map((char, index) => (
              <li key={index}>{char}</li>
            ))}
        </ul>
      )}
    </div>
  );
}
