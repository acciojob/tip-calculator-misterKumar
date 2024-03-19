
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
    const [tipPercent, setTipPercent] = useState(18);
  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);

  function calculateTip() {
    //validate input
    if (total === "" || tipPercent == 0) {
      alert("Please enter values");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (people === "" || people <= 1) {
      setPeople(1);
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let tip = (total * tipPercent * 0.01) / people;
    setTip((tip).toFixed(2));
  }

  return (
    <>
      <div id="container">
        <h1>Tip Calculator</h1>
        <div id="calculator">
          <form>
            <p>How much was your bill?</p>
            ${" "}
            <input
              id="billamt"
              type="text"
              placeholder="Bill Amount"
              onChange={(e) => setTotal(e.target.value)}
              value={total}
            />
            <p>Tip percent?</p>
            <input
              id="serviceQual"
              onChange={(e) => setTipPercent(e.target.value)}
              value={tipPercent}
            />
          </form>
          <p>How many people are sharing the bill?</p>
          <input
            id="peopleamt"
            type="text"
            placeholder="Number of People"
            onChange={(e) => setPeople(e.target.value)}
            value={people}
          />{" "}
          people
          <br />
          <button type="button" id="calculate" onClick={() => calculateTip()}>
            Calculate!
          </button>
        </div>
        <div id="totalTip">
          <sup>$</sup>
          <span id="tip">{tip}</span>
          <small id="each"> each</small>
        </div>
      </div>
    </>
  );
}

export default App