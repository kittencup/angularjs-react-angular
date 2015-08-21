var Input = React.createClass({
    getDefaultProps: function () {
        return {
            type: 'text'
        };
    },
    render: function () {
        return <input type={this.props.type} name={this.props.name} />;
    }
});

var Login = React.createClass({
    render: function () {
        return <div>
            <Input name="username" />
            <Input name="password" type="password" />
        </div>;
    }
});


React.render(<Login />, document.getElementById('container'));
