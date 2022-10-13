import { createSignal } from "solid-js";
function Counter(props) {
  const [count, setCount] = createSignal(0);
  return <button onClick={event => {
    setCount(count() + 1);
  }}>
      {count()}
    </button>;
}
export default Counter;