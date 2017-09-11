import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewUser extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(values) {
    console.log(this.props.usersActions);
    const { usersActions } = this.props;
    usersActions.createUser(values);
    console.log('user created');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

export default reduxForm({
  form: 'NewUserForm'
})(NewUser);
