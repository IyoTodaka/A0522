import React from "react";

export default class Field extends React.Component{
  constructor(props){

    //親からもらったpropsを使用する為にstateにセットする
    //propsはread onlyなので、propsのままでは子の関数で使えない
    super(props)
    this.state={
      callBackFunc:this.props.callBackFunc,
      mailPattern:this.props.mailPattern,
      pwdLetter:this.props.pwdLetter,
      pwdCapital:this.props.pwdCapital,
      pwdNumber:this.props.pwdNumber,
      pwdLength:this.props.pwdLength,
      value:this.props.value,
    }

    //親からもらった関数を使用し、結果を親に返す為に子側でもバインドする
    this.childCallBackFunction = this.childCallBackFunction.bind(this)
  }

  //親からもらった関数のコールバック関数
  childCallBackFunction(value){
    this.state.callBackFunc(value)
  }
  
  render(){

    return (
      <div className="Field">
        <div className="Field__Label">{this.props.label}</div>
        <input
          id={this.props.inputId} 
          className="Field__Input" 
          type={this.props.type} 
          pattern={this.props.pattern}
          // カーソルが当てられると
          onFocus={()=>{
            document.getElementById(this.props.validateId).style.display="block";
          }}
          onBlur={()=>{
            document.getElementById(this.props.validateId).style.display="none";
          }}
          onChange={(e)=>{
            this.childCallBackFunction(e.target.value)
          }}
        />

        {/* kindOfFieldがmailだった場合はmail用メッセージ、passwordの場合はpassword用 */}
        <div className="Field__HelperMessage">
          {this.props.kindOfField=="mail" ? 
          <div id="mailMessage">
              <h3>Mail must contain the following:</h3>
              <p id="mailPattern" className={this.state.mailPattern}>
                <b>input correctly email address pattern</b>
              </p>
          </div>
          :(
            <div id="pwdMessage">
              <h3>Password must contain the following:</h3>
              <p id="pwdLetter" className={this.state.pwdLetter}>A <b>lowercase</b> letter</p>
              <p id="pwdCapital" className={this.state.pwdCapital}>A <b>capital (uppercase)</b> letter</p>
              <p id="pwdNumber" className={this.state.pwdNumber}>A <b>number</b></p>
              <p id="pwdLength" className={this.state.pwdLength}>Minimum <b>8 characters</b></p>
            </div>
            )
          }
        </div>

      </div>
    );
  }
  componentDidUpdate(prevProp){
    if(prevProp.mailPattern != this.props.mailPattern){
      this.setState({mailPattern:this.props.mailPattern})
    }
    if(prevProp.pwdLetter != this.props.pwdLetter){
      this.setState({pwdLetter:this.props.pwdLetter})
    }
    if(prevProp.pwdCapital != this.props.pwdCapital){
      this.setState({pwdCapital:this.props.pwdCapital})
    }
    if(prevProp.pwdNumber != this.props.pwdNumber){
      this.setState({pwdNumber:this.props.pwdNumber})
    }
    if(prevProp.pwdLength != this.props.pwdLength){
      this.setState({pwdLength:this.props.pwdLength})
    }
    if(prevProp.value != this.props.value){
      document.getElementById(this.props.inputId).value=this.props.value
    }

  }
}
