import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class NewUser extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { usersActions } = this.props;
    usersActions.createUser(values);
    console.log('user created');
  }

  renderField(field) {
    const { type, meta: { touched, error } } = field;
    const errorClass = `${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={errorClass}>
        <input
          type={type}
          placeholder={field.placeholder}
          className="login-input-terms"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="first_name"
          name="first_name"
          placeholder="First Name"
          component={this.renderField}
        />
        <Field
          label="second_name"
          name="second_name"
          placeholder="Second Name"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

NewUser.propTypes = {
  usersActions: PropTypes.obj.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'NewUserForm'
})(NewUser);
