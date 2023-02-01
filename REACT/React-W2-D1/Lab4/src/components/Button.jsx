import React from "react";

export default class Button extends React.Component {
  constructor(props){
    super(props)
    this.state={
      buttonClass:this.props.buttonClass,

      //ここにはtrueかfalseが来る
      //初期値はtrueでdisabled属性がtrueの場合がボタンが押せなくなる
      buttonDisabled:this.props.disabled,
      callBuckFunc:this.props.callBackFunc,
    }
    this.childCallBackFunction=this.childCallBackFunction.bind(this)
  }
  childCallBackFunction(){
    this.state.callBuckFunc()
  }
  render() {
    return (
      <button className={this.state.buttonClass} 
        disabled={this.state.buttonDisabled} 
        onClick={this.childCallBackFunction}>
        <div className="Button__Label">{this.props.label}</div>
      </button>
    );
  }
  componentDidUpdate(prevProp){
    if(prevProp.buttonClass != this.props.buttonClass){
      console.log("buttonクラス変更");
      console.log(this.props.buttonClass);
      this.setState({buttonClass:this.props.buttonClass})
    }
    if(prevProp.disabled != this.props.disabled){
      this.setState({buttonDisabled:this.props.disabled})
    }
  }
}
