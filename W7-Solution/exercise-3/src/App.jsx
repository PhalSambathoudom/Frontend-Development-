import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false); 
  /* You will need some function to handle the key pressed and button events */
  
  function onA(event) {
    setNumA(event.target.value);
  }

  function onB(event) {
    setNumB(event.target.value);
  }

  function compute() {
    const a = Number(numA);
    const b = Number(numB);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please Enter Numbers!");
      setIsError(true);
    } else {
      setResult((a + b).toString());
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange = {onA} value = {numA} />

      <label>B =</label>
      <input onChange = {onB} value = {numB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value = {result} className = {isError ? "error" : ""} />
      <button onClick = {compute}>Compute</button>
    </main>
  );
}

export default App;
