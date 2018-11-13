import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

export default class Input extends React.Component {
  handleChange = name => event => {
    this.props.onChange(name, event.target.value);
  };

  render() {
    const { name, type, label, autoComplete, value } = this.props;

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

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string
};
