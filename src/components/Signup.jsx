import "react";

const Signup = () => {
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="text-start col-md-4 m-auto">
          <h4>Signup</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputusername" className="form-label">
                Username
              </label>
              <input
                type="username"
                placeholder="Enter your username"
                className="form-control"
                id="exampleInputusername"
                aria-describedby="usernameHelp"
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="usernameHelp" className="form-text">
                We&apos;ll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
                placeholder="***********"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn custom-gradient-btn w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
