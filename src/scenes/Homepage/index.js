import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser, logout } from '../../actions';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const { loadUser } = this.props;
    loadUser();
  }

  handleLogout() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { user, userLoading } = this.props;

    if (userLoading || !user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="text-center">Hello, {user.name}</div>
        <button className="btn btn-primary" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.data.user.data,
  userLoading: state.data.user.loading,
});

export default connect(mapState, { loadUser, logout })(Homepage);
