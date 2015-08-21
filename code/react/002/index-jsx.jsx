
var TodoInput = React.createClass({

    addTodo:function(){
        this.props.addTodo(this.refs.title.getDOMNode().value);
        this.refs.title.getDOMNode().value = '';
    },

    render:function(){
        return (
            <div>
                <input type="text" ref="title" />
                <button type="button" onClick={this.addTodo}>add</button>
            </div>
        );
    }
});

var TodoItem = React.createClass({
    render:function(){

        var style = {};
        if (this.props.data.status) {
            style.color = 'red'
        }

        return (
            <div>
                <p style={style}>
                    {this.props.data.title}
                    <input type="checkbox" checked={this.props.data.status} data-index={this.props.index} onChange={this.props.todoStatusChange} />
                </p>
            </div>
        );
    }
});

var TodoList = React.createClass({
    render:function(){

        var todoStatusChange = this.props.todoStatusChange;

        return (
            <div>
            {
                this.props.data.map(function(result,index){
                    return <TodoItem data={result} index={index} todoStatusChange={todoStatusChange} />;
                })
            }
            </div>
        )
    }
});


var Todo = React.createClass({
    getInitialState: function () {
        return {
            data:[
                {
                    title:'hello world',
                    status:false
                }
            ]
        };
    },
    todoStatusChange:function(event){
        var index = event.target.getAttribute('data-index');
        var data = this.state.data;
        data[index].status = !data[index].status;
        this.setState({
            data:data
        })
    },
    addTodo:function(title){
        var data = this.state.data;

        data.push({
            title:title
        });

        this.setState({
            data:data
        })
    },
    render:function(){

        return (
            <div>
                <TodoInput addTodo={this.addTodo} />
                <TodoList data={this.state.data} todoStatusChange={this.todoStatusChange} />
            </div>
        )

    }
});


React.render(<Todo />, document.getElementById('container'));
