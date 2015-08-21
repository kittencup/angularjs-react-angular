var Input = React.createClass({
    displayName: "Input",
    getDefaultProps: function () {
        return {
            type: 'text'
        }
    },
    render: function () {
        return React.createElement('input', {name: this.props.name, type: this.props.type});
    }
});

var Login = React.createClass({displayName: "Login",
    render: function () {
        return React.createElement(
            'div',
            {},
            React.createElement(Input, {name: 'username'}),
            React.createElement(Input, {name: 'password', type: 'password'})
        )
    }
});

React.render(React.createElement(Login), document.getElementById('container'));
