import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Plus = () => {
    setCount(count + 1);
  };

  const Minus = () => {
if (count > 0){
    setCount(count - 1);
}
  };

  return (
    <div className="counter">
      <h3 className="text">Counter</h3>
      <div className="count">
        <div>{count}</div>
        <button onClick={Plus}>Increase</button>
        <button onClick={Minus}>Decrease</button>
      </div>
    </div>
  );
}

export default App;