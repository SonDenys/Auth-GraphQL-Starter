import React, { Component } from "react";
import AuthForm from "./AuthForm";
import LoginMutation from "../mutations/Login";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";
import { hashHistory } from "react-router";

/* Class Component */

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  // It is a part of the react standard API
  // Whenever our component is about to be rendered due to any reason
  // this function right here will be automatically called

  componentWillUpdate(nextProps) {
    //   // this.props => the old, current set of props
    //   // nextProps => the argument "nextProps" is the props object that will be placed on our component the next time
    //   // that it renders or as it is just about to update (or when the component rerenders)
    if (!this.props.data.user && nextProps.data.user) {
      // redirect to dashboard
      hashHistory.push("/dashboard");
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ currentUserQuery }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

/* Functional Component */

// const LoginForm = (props) => {
//   const [errors, setErrors] = useState([]);

//   const onSubmit = ({ email, password }) => {
//     props
//       .mutate({
//         variables: { email, password },
//         refetchQueries: [{ currentUserQuery }],
//       })
//       .catch((res) => {
//         const errors = res.graphQLErrors.map((error) => error.message);
//         setErrors(errors);
//       });
//   };
//   return (
//     <div>
//       <h3>Login</h3>
//       <AuthForm onSubmit={onSubmit} />
//     </div>
//   );
// };

export default graphql(LoginMutation)(LoginForm);

// export default graphql(currentUserQuery)(graphql(LoginMutation)(LoginForm));
