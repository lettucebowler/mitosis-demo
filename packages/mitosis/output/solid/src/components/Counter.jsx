import { createSignal } from "solid-js";
function Counter(props) {
  const [count, setCount] = createSignal(0);
  return <div>
      <button onClick={event => {
      setCount(1);
      console.log(state);
    }}>
        {count()}
      </button>
    </div>;
}
export default Counter;