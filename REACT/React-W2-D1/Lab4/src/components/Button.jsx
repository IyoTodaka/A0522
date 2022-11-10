import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button">
        <div className="Button__Label">{this.props.label}</div>
      </button>
    );
  }
}
