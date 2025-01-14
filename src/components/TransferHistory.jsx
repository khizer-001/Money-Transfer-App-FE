// import React from "react";
import Table from "./Table";

const TransferHistory = () => {
  return (
    <div>
      <div className=" container mt-5 w-75">
        <div className="card">
          <div className="card-body">
            <div className=" row justify-content-center">
              <h3 className="col-md-6">Current Balance </h3>
              <input
                disabled
                type="text"
                id="disabledTextInput"
                className="form-control w-25 col-md-6"
                placeholder="12000$"
              />
            </div>
            <hr />
            <div className="row justify-content-center">
              <h3 className=" col-md-7">Transfer History</h3>
              <a href=""
                className="btn bg-danger bg-gradient col-md-2"
                type="submit"
              >
                Deposit History
              </a>
            </div>
            <Table date="Jan 4, 2025" />
            <Table date="Jan 6, 2025" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferHistory;
