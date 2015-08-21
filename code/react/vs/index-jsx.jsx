
var randomMillis = function() {
    return Math.floor(Math.random() * 300);
}

var getRandomColor = function(){
    return  '#' +
        (function(color){
            return (color += '0123456789abcdef'[Math.floor(Math.random()*16)])
            && (color.length == 6) ?  color : arguments.callee(color);
        })('');
}

var tdItems = [];

var TdItem = React.createClass({
    getInitialState: function() {
        tdItems.push(this);
        return {
            tr: randomMillis(),
            background:'#fff'
        }
    },
    render:function(){

        var style = {
            background:this.state.background
        };

        return <td style={style} key={this.state.tr + '-' + this.state.td}>{this.state.tr}</td>
    }
});

var TableList = React.createClass({
    getInitialState: function () {
        return {
            tr:0,
            td:0,
            loadShow:true
        };
    },
    load:function(){
        this.setState({
            loadShow:!this.state.loadShow,
            tr:50,
            td:50
        });
    },
    loadAll:function(){
        tdItems.forEach(function(item){
            var r = randomMillis();
            setTimeout(function(){
                item.setState({
                    tr:r,
                    background:getRandomColor()
                })
            },0);
        });
    },
    render:function(){

        var tr = [],td = [];

        for(var i = 0 ; i < this.state.tr ; i++){
            tr.push(i);
        }
        for(var i = 0 ; i < this.state.td ; i++){
            td.push(i);
        }


        var loadStyle = {
            display:this.state.loadShow ? 'block' :'none'
        };

        var loadAllStyle = {
            display:!this.state.loadShow ? 'block' :'none'
        }


        return (
            <div>
                <div>
                    <button style={loadStyle} onClick={this.load}>加载</button>
                    <button style={loadAllStyle} onClick={this.loadAll}>加载所有</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                        {
                            tr.map(function(r){
                                return <tr key={r}>
                                    {
                                        td.map(function(d){
                                            return <TdItem td={d} tr={r} />
                                        })
                                    }
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
});


React.render(<TableList />, document.querySelector('div'));
