import {useState, Show, For} from '@builder.io/mitosis';
export default function Counter(props) {
    const state = useState({ count: 0});

    return (<div>
        <button onClick={(event) => {
            state.count += 1;
            }}
        >{state.count}</button>
    </div>);
}