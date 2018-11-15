import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function test() {
    const element = (
        <div>
            <h1>Mike is hot!!!</h1>
            {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
        </div>
    );
    ReactDOM.render(element, document.getElementById('test'));
}

test();
// setInterval(test, 1000);