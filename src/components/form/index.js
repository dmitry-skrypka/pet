import React, { Component } from "react";

import InputComponent from "./input";
import Button from '@material-ui/core/Button';
class Form extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit()

    }
    handleChange =(name, value)=> {
     this.props.handleChange(name, value)
    };

  render() {

    return (


        <form  >
            <InputComponent name={"email"} type={"email"} label={"email"} onChange={this.handleChange} />
            <InputComponent name={"password"} type={"password"} onChange={this.handleChange}/>
            <Button onClick={this.handleSubmit} />
        </form>


    );
  }
}

export default Form;
