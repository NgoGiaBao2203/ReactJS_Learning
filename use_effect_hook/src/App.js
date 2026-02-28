import { useEffect, useState } from "react";
import Content from "./Content";
function App() {
  useEffect(() => {
    console.log("Mounted");
  });
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      <Content />
    </div>
  );
}

export default App;
