import { useState } from "react";
import { InputNumber } from "primereact/inputnumber";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      {count > 0 && (
        <InputNumber
          showButtons
          buttonLayout="horizontal"
          min={0}
          value={count}
          onChange={(e) => {
            if (typeof e.value === "number") {
              setCount(e.value);
            }
            console.log("onChange", e.value);
          }}
          onValueChange={(e) => {
            if (typeof e.value === "number") {
              setCount(e.value);
            }
            console.log("onValueChange", e.value);
          }}
        />
      )}
    </>
  );
}

export default App;
