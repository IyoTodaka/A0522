import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button" disabled={this.props.isDisabled} onClick={this.props.onClick}>
        <div className="Button__Label">{this.props.label}</div>
      </button>
    );
  }
}
