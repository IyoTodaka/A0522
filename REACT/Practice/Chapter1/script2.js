let dom = document.querySelector('#root');

let elememt = React.createElement(
    'div' ,{} ,[
        React.createElement(
            'h2',{} ,"Hellooo"
        ),
        React.createElement(
            'h3',{} , "React sample"
        ),
        React.createElement(
            'ul',{} ,[
                React.createElement(
                    'li',{} ,"First item"
                ),
                React.createElement(
                    'li', {},"second"
                ),
                React.createElement(
                    'li', {},"third"
                )
            ]
        )
    ]
) 

ReactDOM.render(elememt,dom);