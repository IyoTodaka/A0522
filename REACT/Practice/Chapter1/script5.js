let dom = document.querySelector('#root');

let elememt = React.createElement(
    'div' ,{} ,[
        React.createElement(
            'h2',{} ,"Hellooo"
        ),
        React.createElement(
            'h4',{className:'alert alert-primary'} , 
            "React sample"
        ),
        React.createElement(
            'ul',{className:'list-group'} ,[
                React.createElement(
                    'li',{className:'list-group-item'} ,
                    "First item"
                ),
                React.createElement(
                    'li', {className:'list-group-item'},
                    "second"
                ),
                React.createElement(
                    'li', {className:'list-group-item'},
                    "third"
                )
            ]
        )
    ]
) 

ReactDOM.render(elememt,dom);