import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button data-testid="button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default App;
