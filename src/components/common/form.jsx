import React, { Component } from "react";
import Joi from "joi-browser";
const SPREADSHEET_ID = "1lXXvz1F8i71rk7YwVAjBxzTFvVNmFwlyyVJSEr4Az1Y"; //from the URL of your blank Google Sheet
const CLIENT_ID =
  "892818296916-934g40dnmvecddhcqa2ctouda6pfp9np.apps.googleusercontent.com"; //from https://console.developers.google.com/apis/credentials
const API_KEY = "AIzaSyDNRmFe6MUmweWy5tg0jvz4HPXT5JaFSRI"; //https://console.developers.google.com/apis/credentials
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

class Form extends Component {
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
    console.log(this.state.data);

    // const response = await fetch(url, data,{}
  };
  render() {
    const { data } = this.state;
    return (
      <div className="bg text-light ">
        <h3 className="text-center pt-3"> RST booking</h3>
        <form onSubmit={this.handleSubmit} className=" form-group ">
          {/* <div className=" form-group"></div> */}
          <label className=" col-12">
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={this.handleChange}
              className="form-control  "
            />
          </label>
          <label className=" col-12">
            E-mail Id
            <input
              name="email"
              type="text"
              value={data.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <label className=" col-12">
            Mobile Number
            <input
              type="text"
              name="mobileNumber"
              value={data.mobileNumber}
              className="form-control"
              onChange={this.handleChange}
            />
          </label>
          <div className=" text-center">
            <button
              type="submit"
              className="center btn btn-dark m-2 mb-2 col-7 "
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
