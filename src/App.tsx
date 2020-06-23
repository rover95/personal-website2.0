import React, { useState } from "react";

function App() {
  const [name, setName] = useState("rovelasts");
  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
