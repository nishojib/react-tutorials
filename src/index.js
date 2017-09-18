import React from 'react'
import ReactDOM from 'react-dom'

// function Cartoon(props) {
//     return <h1>Hello, {props.name}</h1>
// }

class Cartoon extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} {this.props.show}</h1>
    }
}

// function Show() {
//     return <div>
//                 <Cartoon name='Pikachu' show='Pokemon' />
//                 <Cartoon name='Jasmine' show='Alladin' />
//             </div>
// }

class Show extends React.Component {
    render() {
        return <div>
                    <Cartoon name='Pikachu' show='Pokemon' />
                    <Cartoon name='Jasmine' show='Alladin' />
                </div>
    }
}

ReactDOM.render(
    <Show />,
    document.getElementById('root')
);


