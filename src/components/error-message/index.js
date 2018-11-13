import React from "react";
import PropTypes from "prop-types";

export default class ErrorMessage extends React.Component {

  render() {
    const msg = this.props.msg

    return (
    <span>{msg} </span>
    );
  }
}
ErrorMessage.propTypes = {
    msg: PropTypes.string
};