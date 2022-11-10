import React from "react";

export default class Field extends React.Component{
  render(){
    return (
      <div className="Field">
        <div className="Field__Label">{this.props.label}</div>
        <input className="Field__Input" />
        <div className="Field__HelperMessage">Helper message</div>
      </div>
    );
  }
}
