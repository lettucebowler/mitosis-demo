import {useState} from '@builder.io/mitosis';
export default function Counter(props) {
    const state = useState({ count: 0});

    return (<button onClick={(event) => {state.count = state.count + 1}}>{state.count}</button>);
}