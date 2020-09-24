import React, { Component } from "react";
import Joi from "joi-browser";
import * as emailjs from "emailjs-com";
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
      message: "",
    },
  };
  schema = {
    name: Joi.string().required().min(6),
    email: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    message: Joi.string().required(),
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
    const data = this.state.data;

    var template_params = {
      name: data.name,
      emailId: data.email,
      mobileNumber: data.mobileNumber,
      message: data.message,
    };

    var service_id = "rstbooking";
    var template_id = "template_87e22y9";
    emailjs.send(
      service_id,
      template_id,
      template_params,
      `user_t7d1yaU32rcGRFxqEUuhj`
    );

    // const response = await fetch(url, data,{}
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        {/* <h3 className="text-center pt-3"> RST booking</h3> */}
        <form onSubmit={this.handleSubmit} className=" form-group col-md-11  ">
          {/* <div className=" form-group"></div> */}
          <label className=" col-12 mt-4 ">
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={this.handleChange}
              className="form-control mt-2"
            />
          </label>
          <label className=" col-12 mt-4">
            E-mail Id
            <input
              name="email"
              type="text"
              value={data.email}
              onChange={this.handleChange}
              className="form-control mt-2"
            />
          </label>
          <label className=" col-12 mt-4">
            Mobile Number
            <input
              type="text"
              name="mobileNumber"
              value={data.mobileNumber}
              className="form-control input-lg mt-2"
              onChange={this.handleChange}
            />
          </label>
          <label className=" col-12 mt-4">
            <i className="fa fa-commenting" aria-hidden="true"></i>
            &nbsp;&nbsp; Message
            <textarea
              type="textarea"
              rows={6}
              name="message"
              value={data.message}
              className="form-control input-lg mt-2"
              onChange={this.handleChange}
            />
          </label>
          <div className=" text-left mt-4">
            <button
              type="submit"
              className="center btn m-2 mb-2 mt-3col-md-4 text-light "
              style={{ background: "#393185" }}
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
