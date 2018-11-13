import React, { Component } from "react";
import InputComponent from "./input";
import Button from "@material-ui/core/Button";
import "./index.scss";
import ErrorMessage from "../error-message";
import PropTypes from "prop-types";

class Form extends Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit();
  };
  handleChange = (name, value) => {
    this.props.handleChange(name, value);
  };

  render() {
    return (
      <form>
        <InputComponent
          name={"email"}
          type={"email"}
          label={"email"}
          onChange={this.handleChange}
        />
        <InputComponent
          name={"password"}
          type={"password"}
          label={"password"}
          onChange={this.handleChange}
        />
        <ErrorMessage msg={this.props.msg} />
        <Button onClick={this.handleSubmit}>PROCEED</Button>
      </form>
    );
  }
}

export default Form;
Form.propTypes = {
    handleSubmit: PropTypes.func,
    msg: PropTypes.string,
    handleChange: PropTypes.func
};
