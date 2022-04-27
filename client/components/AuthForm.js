import React, { Component } from "react";

/* Class Component */

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </div>

          {this.props.errors && (
            <div className="errors">
              {this.props.errors.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          )}

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

/* Functional Component */

// const AuthForm = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = (event) => {
//     event.preventDefault();
//     props.onSubmit({ email, password });
//   };

//   return (
//     <div className="row">
//       <form onSubmit={onSubmit} className="col s4">
//         <div className="input-field">
//           <label>Email</label>
//           <input
//             value={this.state.email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div className="input-field">
//           <label>Password</label>
//           <input
//             value={this.state.password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button className="btn">Submit</button>
//       </form>
//     </div>
//   );
// };

export default AuthForm;
