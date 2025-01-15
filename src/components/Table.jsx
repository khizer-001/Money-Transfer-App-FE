/* eslint-disable react/prop-types */
// import React from 'react'
import 'react'

const Table = ({date}) => {
  return (
    <div className="">
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th colSpan="3" className="ps-5" scope="col">{date}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row"></th> */}
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
            <td>Deposit</td>
            <td>1200</td>
          </tr>
          <tr>
            {/* <th scope="row"></th> */}
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
            <td>Deposit</td>
            <td>1200</td>
          </tr>
          <tr>
            {/* <th scope="row"></th> */}
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
            <td>Deposit</td>
            <td>1200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
