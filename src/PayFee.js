import React from "react";

const obj = { id: 1, amount: 18650000, semester: "Spring23" };

const pay = () => {
  fetch("http://localhost:3001/FeePayment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fee: obj,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then((response) => {
      alert("yes");
      console.log(response.url);
      window.location = response.url;
    })
    .catch((e) => {
      console.error(e.error);
    });
};

const PayFee = () => {
  return (
    <div className="tablebox">
      <table className="table table-striped">
        <thead>
          <th>id</th>
          <th>Semester</th>
          <th>Ammount</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>{obj.id}</td>
            <td>{obj.semester}</td>
            <td>{obj.amount}</td>
            <td>
              <button className="butt" onClick={pay}>
                Gpay
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PayFee;
