import React from 'react';
import ReactDom from 'react-dom';
import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return <h1>Hello World from React boilerplate</h1>;
    }
}

ReactDom.render(<Welcome />, document.getElementById('root'));
