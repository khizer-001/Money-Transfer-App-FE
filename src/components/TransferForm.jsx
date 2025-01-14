import 'react'

const TransferForm = () => {
  return (
    <div className=" container pt-5 justify-content-center d-flex">
      <div className="card mt-5 col-5 pt-4">
        <div className="card-body">
          <div className=" row justify-content-center">
            <p className="col-md-6">Current Balance</p>
            <input
              disabled
              type="text"
              id="disabledTextInput"
              className="form-control w-25 col-md-6"
              placeholder="12000$"
            />
          </div>
          <div className=" ps-5 pe-5">
            <h5>Payment</h5>
            <hr />
          </div>
          <div className=" ps-5 pe-5">
            <form>
              <select
                className="form-select mb-2 mt-4"
                aria-label="Default select example"
              >
                <option selected>Select Your Friend</option>
                <option value="1">xyz</option>
                <option value="2">xyz</option>
              </select>
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
                className="btn btn-primary w-100 mb-4"
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
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 ms-4"
                        id="exampleModalLabel"
                      >
                        Transaction Successful
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body ms-4">
                      <h5>Deposit Slip</h5>
                    </div>
                    <div className="card me-5 ms-5 mb-4 mt-2">
                      <div className="card-body d-flex justify-content-center">
                        <p className=" mb-0 pb-0">Friend Name</p>
                        <p className=" ps-5 ms-5 mb-0 pb-0">Jan 3, 2025</p>
                      </div>
                    </div>
                    <div className="card me-5 ms-5 mb-4 mt-2">
                      <div className="card-body d-flex justify-content-center">
                        <p>Total Amount Deposit</p>
                        <h5 className=" ps-5 ms-5">30$</h5>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
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

export default TransferForm;
