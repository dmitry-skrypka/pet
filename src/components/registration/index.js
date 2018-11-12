import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import Form from "../form";
import Api from "../../helpers/api"
import axios from "axios";
export class Registration extends React.Component {
  handleFieldChange = (name, value) => {
    const data = {
      [name]: value
    };
    this.props.onInputChange(data);
  };

  handleSubmit = () => {
    const data = {
      login: this.props.email,
      password: this.props.password
    };

    this.props.onSubmit(data)




  };

  render() {
    console.log(this.props);
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleFieldChange}
      />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
