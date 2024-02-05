import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import FetchBody from "./components/FetchBody";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  const [isDate, setIsDate] = useState();

  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState();
  const [isAttendanceInfo, setIsAttendanceInfo] = useState(false);

  function getDate(e) {
    e.preventDefault();
    let sendDate = document.getElementById("date").value;
    setDate(sendDate);

    axios.post("http://localhost:3000/get-date", { sendDate }).then((data) => {
      if (data) {
        console.log("get-Date data is here");
        setAttendance(data);
        setIsDate(true);
      } else {
        console.log(data);
        setIsDate(false);
      }
    });
  }

  // function attendanceInfo(){
  //   setIsAttendanceInfo(true)
  // }

  useEffect(() => {
    setIsDate(false);
  }, [date]);

  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <form className="d-flex" onSubmit={getDate}>
            <input
              className="form-control me-2"
              type="date"
              id="date"
              name="date"
            />
            <input
              className="btn btn-outline-light"
              type="submit"
              value="Search"
            />
          </form>
          <button className="btn btn-outline-light" type="click" id="fetchAttendance" onClick={()=>{
            setIsAttendanceInfo(!isAttendanceInfo)
            }}>Fetch Attendance</button>
        </div>
      </nav>
      { isAttendanceInfo ? <StudentDetails /> :null }
      {isDate ? <FetchBody attendance={attendance} /> : <Body date={date} />}
      
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
