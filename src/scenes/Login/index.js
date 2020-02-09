import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { Link } from 'react-router-dom';
import { login } from '../../actions';
import LoginForm from '../../components/forms/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, { setSubmitting, setStatus }) {
    const { login, replace } = this.props;

    login(values.email, values.password)
      .then(() => {
        setSubmitting(false);
        replace('/');
      })
      .catch(error => {
        setStatus({ error: error.message });
        setSubmitting(false);
      });
  }

  render() {
    return (
      <div className="container">
        <LoginForm handleSubmit={this.handleSubmit} />
        <Link to="/signup">Don't have an account?</Link>
      </div>
    );
  }
}

const mapState = state => ({});

export default connect(mapState, { login, replace })(Login);
