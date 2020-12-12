import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions";

class Login extends Component {
  state = {
    formdata: {
      name: "Lukasz",
      lastname: "Zeromski",
      password: "Testing123",
      email: "francis@gmail.clm",
    },
    register: false,
    loading: false,
  };

  handleFormType = () => {
    this.setState((prevState) => ({ register: !prevState.register }));
  };

  handleRedirection = (payload) => {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.register) {
      this.props
        .dispatch(registerUser(this.state.formdata))
        .then(({ payload }) => {
          this.handleRedirection(payload);
        });
    } else {
      console.log(this.state.formdata, "login");
    }
  };

  handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState((prevState) => ({
      formdata: { ...prevState.formdata, [name]: value },
    }));
  };

  render() {
    const { register, formdata, loading } = this.state;
    let formTitle = register ? "Register" : "Login";
    return (
      <div className="container">
        <h1> {formTitle}</h1>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal"></h1>

          {register ? (
            <>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control mb-3"
                placeholder="Your name"
                onChange={this.handleInput}
                value={formdata.name}
              />

              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control mb-3"
                placeholder="Your lastname"
                onChange={this.handleInput}
                value={formdata.lastname}
              />
            </>
          ) : null}

          <input
            type="email"
            id="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email address"
            onChange={this.handleInput}
            value={formdata.email}
          />

          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.handleInput}
            value={formdata.password}
          />

          <br />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={loading}
          >
            Register or Login
          </button>

          <div className="mt-3">
            {register ? " Need to sign in ? " : " Not registered ? "}
            click
            <span className="btn btn-link" onClick={this.handleFormType}>
              here{" "}
            </span>
            to {register ? " login" : " register"}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
