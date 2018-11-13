import React from "react";

import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import connect from "react-redux/es/connect/connect";
import { mapDispatchToProps, mapStateToProps } from "./container";
import "./index.scss";
export class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <div className={"loader"}>
        <RingLoader color={"#123abc"} loading={isLoading} />
      </div>
    ) : (
      <div>
        {this.props.user.id ? (
          <div>
            <Paper className="hello" elevation={1}>
              <span> Hello, {this.props.user.login}</span>
            </Paper>
            <Button
              variant="outlined"
              onClick={this.props.LogOut}
              style={{ marginLeft: 50 }}
            >
              Sign out
            </Button>
          </div>
        ) : (
          <div>
            <Paper className="hello" elevation={1}>
              <Typography variant="h5" component="h3">
                New to OUR_PROJECT_NAME?{" "}
                <Link to="/registration" className="btn btn-link">
                  Create an account.
                </Link>
              </Typography>
            </Paper>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
