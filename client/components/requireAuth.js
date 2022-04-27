import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";
import hashHistory from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    // componentDidMount() => is called whenever the component has been rendered
    // componentWillAmount is called just before rendering, when new props or state have been received.
    componentWillAmount(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};
