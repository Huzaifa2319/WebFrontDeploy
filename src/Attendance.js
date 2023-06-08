import React from "react";
import "./Style/Table.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const AttendanceTable = (props) => {
  const [attendanceData, setData] = useState([]);
  const [opt, setOpt] = useState([]);
  const [course, setcourse] = useState("-");
  useEffect(() => {
    axios({
      url: "http://localhost:3001/getAttendence",
      method: "POST",
      data: { rollNo: "20i1896" },
      // data: { rollNo: props.rollNo },
    })
      .then((res) => {
        setData(res.data);
        let arr = [];
        for (let i = 0; i < attendanceData.length; i++) {
          let found = false;
          for (let j = 0; j < arr.length; j++) {
            if (attendanceData[i].courseCode === arr[j]) {
              found = true;
              break;
            }
          }
          if (!found) {
            arr.push(attendanceData[i].courseCode);
          }
        }
        // console.log("aaa ", attendanceData);
        setOpt(arr);
        console.log("option", arr);
      })
      .catch((err) => {
        console.log("No record Found");
      });
  });
  const filteredData = attendanceData.filter((i) => i.courseCode == course);
  return (
    <div className="tablebox">
      <h1>{course}</h1>
      <CourseOption opt={opt} setcourse={setcourse} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Lecture No</th>
            <th>Date</th>
            <th>Credit Hour</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((record, index) => {
            // if (course == record.courseCode)
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.date}</td>
                <td>{record.creditHour}</td>
                <td>{record.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;

const CourseOption = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.setcourse(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        {props.opt.map((c, index) => {
          return <option value={c}>{c}</option>;
        })}
      </select>
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
  );
};
