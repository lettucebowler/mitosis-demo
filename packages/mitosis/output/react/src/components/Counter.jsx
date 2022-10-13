import * as React from "react";
import { useState } from "react";
function Counter(props) {
  const [count, setCount] = useState(() => 0);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: (event) => {
      setCount(1);
      console.log(state);
    }
  }, count));
}
export {
  Counter as default
};
