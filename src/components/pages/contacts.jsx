import React, { Component } from "react";
import Joi from "joi-browser";
import "../../style/contact.css";

class Contact extends Component {
  state = {
    data: {
      name: "",
      email: "",
      mobileNumber: "",
    },
  };
  schema = {
    name: Joi.string().required().min(6),
    email: Joi.string().required(),
    mobileNumber: Joi.string().required(),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    //validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //set values in state
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty({ name, value }) {
    const objToValidate = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(objToValidate, schema);
    return error ? error.details[0].message : null;
  }

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  doSubmit = async () => {
    // console.log(this.state.data);
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <form onSubmit={this.handleSubmit} name="google-sheet">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          &nbsp;&nbsp;
          <label>
            E-mail Id
            <input
              name="email"
              type="text"
              value={data.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          &nbsp;&nbsp;
          <label>
            Mobile Number
            <input
              type="text"
              name="mobileNumber"
              value={data.mobileNumber}
              className="form-control"
              onChange={this.handleChange}
            />
          </label>
          &nbsp;&nbsp;
          <button type="submit" className=" btn btn-primary  ">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
