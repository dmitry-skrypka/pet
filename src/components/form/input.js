import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default class Input extends React.Component {
  state = { name: "dsds" };

  handleInput = event => {
    // this.props.onChange(event);
  };

  handleChange = name => event => {
    // console.log(name)
    //   console.log(event.target.value)
    this.props.onChange(name, event.target.value)
  };

  render() {
    const
        {name} = this.props,
      type = this.props.type,
      label = this.props.label,
      autoComplete=this.props.autoComplete,
        value=this.props.value
    console.log(this.props);
    return (
      <TextField

        label={label}
        type={type}
        name={name}
        className="test"
        value={value}
        onChange={this.handleChange(name)}
        autoComplete={autoComplete}
        margin="normal"
      />
    );
  }
}
