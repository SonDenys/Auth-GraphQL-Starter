import React, { Component, useEffect } from "react";
import query from "../queries/CurrentUser";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LogoutMutation from "../mutations/Logout";

/* Class Component */

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }],
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) {
      return <div>Loading ...</div>;
    }

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

/* Functional Component */

// const Header = (props) => {
//   const { loading, user } = props.data;
//   const onLogoutClick = () => {
//     props.mutate({
//       refetchQueries: [{ query }],
//     });
//   };

//   const renderButtons = () => {
//     if (loading) {
//       return <div>Loading ...</div>;
//     }
//     if (user) {
//       return (
//         <li>
//           <a onClick={() => onLogoutClick()}>Logout</a>
//         </li>
//       );
//     }
//     return (
//       <div>
//         <li>
//           <Link to="/signup">Signup</Link>
//         </li>
//         <li to="/login">
//           <Link>Login</Link>
//         </li>
//       </div>
//     );
//   };

//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <Link to="/" className="brand-logo left">
//           Home
//         </Link>
//         <ul className="right">{renderButtons()}</ul>
//       </div>
//     </nav>
//   );
// };

// Don't forget that the query you want to pass is always connected with graphql as paramater and written like below
export default graphql(LogoutMutation)(graphql(query)(Header));
