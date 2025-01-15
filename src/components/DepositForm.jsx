import 'react'
import './button.css'

const DepositForm = () => {
  return (
    <div className=" container pt-5 justify-content-center d-flex">
      <div className="card mt-5 col-5 pt-5">
        <div className="card-body">
          <div className=" row justify-content-center">
          <p className="col-md-6 fs-5 ps-0">Current Balance</p>
            <input
              disabled
              type="text"
              id="disabledTextInput"
              className="form-control w-25 col-md-6"
              placeholder="12000"
            />
          </div>
          <div className=" ps-5 pe-5">
            <h5>Payment</h5>
            <hr />
          </div>
          <div className=" ps-5 pe-5">
            <form>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="123 454 453"
                />
              </div>
              <label>Pay With:</label>
              <div className="mb-4 mt-2 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Paystag
                </label>
              </div>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn custom-gradient-btn w-100 mb-5"
              >
                Pay USD
              </button>
            </form>
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                  <div className="modal-body ms-4 ps-4 me-4 pe-4">
                    <h1
                        className="modal-title fs-5 text-center mb-4 mt-3"
                        id="exampleModalLabel"
                      >
                        Transaction Successful
                      </h1>
                      <h5>Deposit Slip</h5><hr />
                    </div>
                    <div className="card me-5 ms-5 mb-4 mt-2">
                      <div className="card-body d-flex justify-content-center">
                        <p className=" mb-0 pb-0">Total Amount Deposit</p>
                        <h5 className=" ps-5 ms-5">300</h5>
                      </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn custom-gradient-btn w-25"
                        data-bs-dismiss="modal"
                      >
                        Back
                      </button>
                      <button type="button" className="btn custom-gradient-btn w-25">
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;
