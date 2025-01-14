import 'react'
import img from "/loginImg.jpg";

const Login = () => {
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="text-start col m-auto">
          <h4>Login</h4>
          <p>How do i get started lorem ipsum dolor at?</p>
          <form>
            <div className="mb-3">
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
              <div id="emailHelp" className="form-text">
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
            <div className="mb-3 text-end">
                <a href="/" className=" text-decoration-none">forget password</a>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
        <div className=" col">
          <div className="card text-bg-dark">
            <img src={img} className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h3 className="card-title mt-5 ms-5">
                Very good works are <br /> waiting for you
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
