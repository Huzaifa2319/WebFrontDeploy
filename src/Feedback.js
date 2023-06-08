import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Style/Feedback.css";

const Feedback = (props) => {
  const [feed, setfeed] = useState({
    rollNo: props.currentuser.rollNo,
    problem: "",
    feedback: "",
  });

  const handle = (e) => {
    // console.log(e.target);
    console.log(feed);
    const { name, value } = e.target;
    setfeed({ ...feed, [name]: value });
  };

  const clickHandel = () => {
    const options = {
      url: "http://localhost:3001/givefeedback",
      method: "POST",
      data: feed,
    };
    axios(options)
      .then((response) => {
        console.log(response);
        setfeed({
          rollNo: props.currentuser.rollNo,
          problem: "",
          feedback: "",
        });
        alert("Feedback Submiited");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {console.log(feed)}
      <div className="feed-box">
        <h2>Feedback</h2>
        <div className="input-box">
          <input
            type="text"
            placeholder="Problem"
            id="em-input"
            name="problem"
            value={feed.problem}
            onChange={handle}
          />
          <textarea
            type="text"
            placeholder="Description"
            id="text-input"
            name="feedback"
            value={feed.feedback}
            onChange={handle}
          />
          <button className="butt" onClick={clickHandel}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Feedback;
