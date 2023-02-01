import { Component } from "react";

import Field from "./components/Field";
import Button from "./components/Button";

/**
 *
 *
 * Create a form with common features like validation and help messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a helper message for validation errors
 * - Disable Login button until the form is valid
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 *
 *
 */

class App extends Component {
  constructor(props){

    //バリデーションチェック用invalidかvalidでflag管理をする
    super(props)
    this.state={
      mailPattern:"invalid",
      pwdLetter:"invalid",
      pwdCapital:"invalid",
      pwdNumber:"invalid",
      pwdLength:"invalid",

      //メールとパスワードのバリデーションがOKかそうでないか
      //両方trueになるとloginボタンが活性化する
      mailValidate:false,
      passwordValidate:false,

      //メールとパスワードの初期値は空””
      emailValue:"",
      passwordValue:"",

      //loginボタンの初期状態はグレーアウト
      //CSSにDisabledButtonクラスを作り灰色ボタンにしている
      //クラス名がButtonに変わると緑色になり、クリックできるようになる
      loginButtonClass:"DisabledButton",

      //ボタンにDisabled属性を付けて、trueの時(pw,mailが正しくない時)は
      //ボタンをクリックしても反応しない(クリック出来ない)ようにする
      loginButtonDisabled:true
      
    }

  
    //bind
    //bindすることで親から子へ関数を渡し、子からもbindされることで子からの関数を使った
    //結果を受け取ることが出来る
    this.emailUpdate = this.emailUpdate.bind(this)
    this.passwordUpdate = this.passwordUpdate.bind(this)
    this.buttonDisableCheck=this.buttonDisableCheck.bind(this)
    this.clearForm=this.clearForm.bind(this)

  }



  // loginボタンhandler
  //mailとpwから共にtrueが来た場合、CSSのloginButtonClass属性名が"Button"になり
  //ボタンが緑色で表示される + loginButtonDisabled属性がfalseになりボタンがクリックできるようになる
  buttonDisableCheck(email,password){
    if(email && password){
      this.setState({loginButtonClass:"Button", loginButtonDisabled:false})
      
    }else{
      //loginButtonClassの属性名が"DisabledButton"になるとCSSで.DisabledButtonが参照されボタンがグレーで表示される
      this.setState({loginButtonClass:"DisabledButton", loginButtonDisabled:true})
    }
  }

  // Emailバリデーション
  emailValidateCheck(value){
    const pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
    let validate = false
    if(value.match(pattern)){
       //EmailのバリデーションがOKだった場合CSSの.validが適用されメールの条件が緑色になる
      this.setState({mailPattern:"valid",mailValidate:true})
      validate = true
    }else{
       //EmailのバリデーションがNGだった場合CSSの.invalidが適用されメールの条件が赤色になる
      this.setState({mailPattern:"invalid",mailValidate:false})
      validate = false
    }
    //buttonDisableCheckにEmailバリデーション結果のtrue・falseと
    //Passwordバリデーション結果のthis.state.passwordValidate(true・false)を渡す
    this.buttonDisableCheck(validate,this.state.passwordValidate)
    
    
  }
  // Passwordバリデーション
  passwordValidateCheck(value){
    let letterValidate = false
    let capitalValidate = false
    let numberValidate = false
    let lengthValidate = false
    
    let pattern = '[a-z]'

    //それぞれの条件をクリアしていれば、pwの条件文を緑色に変更する
    //CSSの属性値に"valid"が渡ると緑色、"invalid"だと赤色で表示される
    if(value.match(pattern)){
      this.setState({pwdLetter:"valid"})
      letterValidate =true
    }else{
      this.setState({pwdLetter:"invalid"})
    }
    pattern = '[A-Z]'
    if(value.match(pattern)){
      this.setState({pwdCapital:"valid"})
      capitalValidate =true
    }else{
      this.setState({pwdCapital:"invalid"})
    }
    pattern = '[0-9]'
    if(value.match(pattern)){
      this.setState({pwdNumber:"valid"})
      numberValidate =true
    }else{
      this.setState({pwdNumber:"invalid"})
    }
    if(value.length >= 8 ){
      this.setState({pwdLength:"valid"})
      lengthValidate =true
    }else{
      this.setState({pwdLength:"invalid"})
    }
    //全てのバリデーションがOKだった場合passwordValidateをtrueにし
    //this.buttonDisableCheckに第一引数mailの状態、第二引数にpwはtrueを渡す
    if(
      letterValidate &&
      capitalValidate &&
      numberValidate &&
      lengthValidate
    ){
      this.setState({passwordValidate:true})
      this.buttonDisableCheck(this.state.mailValidate,true)
    }
  }

  // mailとpwのコールバック関数
  //コールバック関数はバインドしてからじゃないと使えないので
  //57~58でコールバック関数のバインドをしている
  emailUpdate(value){
    this.setState({emailValue : value})
    this.emailValidateCheck(value)
  }

  passwordUpdate(value){
    this.setState({passwordValue : value})
    this.passwordValidateCheck(value)
  }

  // クリア処理用のコールバック関数60行目
  clearForm(){
    this.setState({
      emailValue:"",
      passwordValue:""})

      //mailとpwは値が変更されるとバリデーションが走るが
      //loginnボタンの状態は変更されないのでbuttonDisableCheck()を呼ぶ
    this.buttonDisableCheck()

  }

  // loginボタンコールバック関数
  loginBtn(){
    alert("You loged in !!!!!!")
  }




  render() {
    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1>Login</h1>
        <div className="Container">

          {/* FieldにemailUpdateとpasswordUpdate を渡しているが子供側でも*/}
          {/* コールバックさせる必要がある(親からもらった関数を使いその結果を親に返す為)*/}
          <Field inputId="inputEmail" 
            label="Email" type="text"
            value={this.state.emailValue}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            validateId="mailMessage"
            mailPattern = {this.state.mailPattern}
            callBackFunc={this.emailUpdate}
            kindOfField="mail"
          />
          
          <Field inputId="inputPassword" 
            label="Password" type="password" 
            value={this.state.passwordValue} 
            pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            validateId = "pwdMessage"
            callBackFunc={this.passwordUpdate}
            kindOfField="password"
            pwdLetter={this.state.pwdLetter}
            pwdCapital={this.state.pwdCapital}
            pwdNumber={this.state.pwdNumber}
            pwdLength={this.state.pwdLength}
          />


          <div className="Buttons">
          {/* FieldにemailUpdateとpasswordUpdate を渡しているが子供側でも*/}
          {/* コールバックさせる必要がある(親からもらった関数を使いその結果を親に返す為)*/}
            <Button label="Clear"
              disabled={false}
              buttonClass="Button"
              callBackFunc={this.clearForm}
            />
            <div className="Spacer" />
            <Button label="Login" 
              onClickEvent= {this.clickBtn}
              disabled={this.state.loginButtonDisabled}
              buttonClass={this.state.loginButtonClass}
              callBackFunc={this.loginBtn}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
