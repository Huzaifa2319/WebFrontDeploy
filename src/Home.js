import Navbar from "./Navbar";
import AttendanceTable from "./Attendance";
import Login from "./Login";
import { useState } from "react";
import PayFee from "./PayFee";
import { Routes, Route } from "react-router-dom";
import Feedback from "./Feedback";

const Home = () => {
  const [login, setLogin] = useState(false);
  const [currentuser, setcurrent] = useState({});
  console.log("current user", currentuser);
  return (
    <div>
      {login ? (
        <>
          <Navbar setLogin={setLogin} />
          <Routes>
            <Route path="/pay" element={<PayFee />} />
            <Route
              path="/givefeedback"
              element={<Feedback currentuser={currentuser} />}
            />
            <Route
              path="/attendance"
              element={<AttendanceTable rollNo={currentuser.rollNo} />}
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={<Login setLogin={setLogin} setcurrent={setcurrent} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default Home;
