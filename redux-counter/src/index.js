import React from 'react';
import ReactDOM from "react-dom/client";
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    // we'll leave this blank for now
    // which is the same as `return undefined;`
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <div>
        <Provider store={store}>
            <Counter />
        </Provider>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);