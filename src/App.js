import "./App.css";
import pageBreak from "./advice-generator-app-main/images/pattern-divider-mobile.svg";
import dice from "./advice-generator-app-main/images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState();

  const getAdviceData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const newData = await response.json();
    setAdvice(newData);
  };

  useEffect(() => {
    getAdviceData();
  }, []);

  //comment here
  return (
    <div className="App">
      <div className="quote-container">
        <div className="advice-number">#123</div>
        {advice && <div className="quote"> {advice.slip.advice} </div>}
        <img src={pageBreak} className="page-break"></img>
        <button className="quote-generator-btn" onClick={getAdviceData}>
          <img src={dice}></img>
        </button>
      </div>
    </div>
  );
}

export default App;
