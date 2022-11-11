import { Component } from "react";

import Field from "./components/Field";
import Button from "./components/Button";

import MainFunction, {validateEmail, validatePassword} from './util/validators'

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
  state = {
    email: "",
    password: "",
    emailHint: null,
    passwordHint: null,
    disableBtn: true,
  }

  // componentDidUpdate(){
  //   console.log(this.state)
  // }

  // componentDidUpdate(){
  //   if(this.state.email !== "" && this.state.password !== ""){
  //     this.setState({ disableBtn: false })
  //   }
  // }
  
  changeHandler = (evt) => {
    const { name, value } = evt.target

    if(this.state.email !== "" && this.state.password !== ""){
      this.setState({ disableBtn: false })
    }else{
      this.setState({ disableBtn: true })
    }

    this.setState({ [name]: value })
  } 

  submitHandler = () => {
    
    const emailHint = validateEmail(this.state.email) //calling a helper function
    this.setState({ emailHint: !emailHint ? "Invalid email address" : "" })

    const passwordHint = validatePassword(this.state.password)
    this.setState({ passwordHint: passwordHint ? passwordHint : "" })

    if(this.state.emailHint === "" && this.state.passwordHint === ""){
      alert("Sign up successful!")
    }

  }

  clearFields = () => {
    console.log("Cleared all fields")
    this.setState({ email: "", password: "" })
  }

  render() {
    const { email, password, disableBtn, emailHint, passwordHint } = this.state
    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1>Sign Up</h1>
        <div className="Container">
          <Field 
            label="email" 
            type="text"
            value={email} 
            onChange={this.changeHandler} 
            hint={emailHint}
          />
          <Field 
            label="password"
            type="text"
            value={password}
            onChange={this.changeHandler}
            hint={passwordHint}
          />

          <div className="Buttons">
            <Button label="Clear" onClick={this.clearFields} />
            <div className="Spacer" />
            <Button 
              label="Sign Up" 
              isDisabled={disableBtn} 
              onClick={this.submitHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
