import { useState } from "react";
import FirstApp from "./FirstApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FirstApp />
    </div>
  );
}

export default App;
