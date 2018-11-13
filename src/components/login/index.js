import React from "react";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import Form from "../form";
import {Link} from "react-router-dom";

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

    this.props.onSubmit(data);
  };

  render() {
    console.log(this.props);
    return (
        <div style={{ padding: 20 }}>
            <div>Log In</div>
            <Form
                handleSubmit={this.handleSubmit}
                handleChange={this.handleFieldChange}
                msg={this.props.feedback.message}

            />
            <div> <Link to="/registration" className="btn btn-link">Not registered</Link></div>
        </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
