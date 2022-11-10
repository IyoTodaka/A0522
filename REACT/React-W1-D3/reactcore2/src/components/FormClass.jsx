import React, { Component } from "react";

export default class FormClass extends Component {
  state = {
    text: '',
    textarea: '',
    checkbox: false,
    singleSelect: '',
    multipleSelect: []
  };

  changeValue = (e) => {
      const { value, name } = e.target
    //   console.log(value, name)
      this.setState(() => ({
          [name]: value
      }))
  }

  changeCheckbox = (e) => {
    const { checked, name } = e.target
      this.setState(() => ({
        [name]: checked
      }))
  }

  changeSelect = ({ target: { name, value, selectedOptions, multiple } }) => {
    // const { value, name, selectedOptions, multiple } = e.target

        if(multiple){
            value = Array.from(selectedOptions).map(option => option.value)
        }

      this.setState(() => ({
        [name]: value
      }))
  }

  render() {
    return <div>
        <form onSubmit={this.submitForm}  >
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            <label>Text</label><br />
            <input type="text" name="text" value={this.state.text} onChange={this.changeValue} />
            <br />
            <label>Text Area</label><br />
            <textarea name="textarea" value={this.state.textarea} onChange={this.changeValue} />
            <br />
            <label>Checkbox</label><br />
            <input type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.changeCheckbox} />
            <br />
            <label>Single Select</label><br />
            <select name="singleSelect" value={this.state.singleSelect} onChange={this.changeSelect}> 
                <option value="">Please select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
            </select>
            <br />
            <label>Multiple Select</label><br />
            <select name="multipleSelect" value={this.state.multipleSelect} onChange={this.changeSelect} multiple> 
                <option value="1">One</option>
                <option value="2">Two</option>
            </select>
            <br />
        </form>
    </div>;
  }
}
