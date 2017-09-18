import React from 'react'
import ReactDOM from 'react-dom'

setInterval(function() {

    let clock = function() {
        return <h2>Time Now: { new Date().toLocaleTimeString() }</h2>
    }

    ReactDOM.render(
        clock(),
        document.getElementById('root')
    );

}, 1000);

