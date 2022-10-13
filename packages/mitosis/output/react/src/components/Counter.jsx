import * as React from "react";
import { useState } from "react";
function Counter(props) {
  const [count, setCount] = useState(() => 0);
  return /* @__PURE__ */ React.createElement("button", {
    onClick: (event) => {
      setCount(count + 1);
    }
  }, count);
}
export {
  Counter as default
};
