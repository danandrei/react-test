import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { replace } from 'connected-react-router';
import { signup } from '../../actions';
import SignupForm from '../../components/forms/SignupForm';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, { setSubmitting, setStatus }) {
    const { signup, replace } = this.props;

    signup(values.name, values.email, values.password)
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
        <SignupForm handleSubmit={this.handleSubmit} />
        <Link to="/login">Already have an account?</Link>
      </div>
    );
  }
}

const mapState = state => ({});

export default connect(mapState, { signup, replace })(Signup);
