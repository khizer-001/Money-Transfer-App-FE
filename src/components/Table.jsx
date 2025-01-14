/* eslint-disable react/prop-types */
// import React from 'react'

const Table = ({date}) => {
  return (
    <div className="">
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th className="ps-5" scope="col">{date}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row"></th> */}
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
            <td>Deposit</td>
            <td>120$</td>
          </tr>
          <tr>
            {/* <th scope="row"></th> */}
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
            <td>Deposit</td>
            <td>120$</td>
          </tr>
          <tr>
            {/* <th scope="row"></th> */}
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
            <td>Deposit</td>
            <td>120$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
