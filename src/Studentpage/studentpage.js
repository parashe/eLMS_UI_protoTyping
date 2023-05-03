import "./student.css";
import {
  AiOutlineUser,
  AiFillHome,
  AiOutlineProfile,
  AiOutlineFolderView,
  AiFillNotification,
} from "react-icons/ai";
import { BiConversation, BiAlarm, BiCalendarPlus } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FaDiscourse } from "react-icons/fa";
import database from "./database.png";
import algorithm from "./alogrithm.jpg";
import software from "./sad.jpg";
import artificial from "./ai.jpg";
import bcu from "./bcu.jpg";

function Student() {
  return (
    <>
      <div class="wrapper">
        <div class="top_navbar">
          <div class="logo">
            <a href="#" style={{ fontSize: "25px" }}>
              <img
                src={bcu}
                style={{ height: "40px", borderRadius: "50%" }}
                alt="Avatar"
                rounded
              />
              <span style={{ marginLeft: "10px" }}>e-LMS</span>{" "}
            </a>
          </div>
          <div class="top_menu">
            <div class="home_link">
              <a href="#">
                <span class="icon">
                  <i class="fa fa-home"></i>
                </span>
                <span>Home</span>
              </a>
            </div>
            <div class="" style={{ color: "black" }}>
              <a href="#">
                <p
                  style={{
                    color: "#f542a4",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  You are logged in as Student
                </p>
              </a>
            </div>
            <div class="right_info">
              <div class="icon_wrap">
                <div class="icon">Good Morning, Parash</div>
              </div>
              <div class="icon_wrap">
                <div class="icon">
                  <AiOutlineUser />
                </div>
              </div>
              <div class="icon_wrap">
                <div class="icon">
                  <AiFillNotification />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="main_body">
          <div class="sidebar_menu">
            <div class="inner__sidebar_menu" style={{ textAlign: "justify" }}>
              <ul>
                <li style={{ textAlign: "justify" }}>
                  <a href="# " class="active">
                    <span class="icon">
                      <i class="fas fa-border-all"></i>
                    </span>
                    <span class="list">
                      <BiAlarm style={{ fontSize: "25px" }} />
                      Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-chart-pie"></i>
                    </span>
                    <span class="list">
                      <AiFillHome style={{ fontSize: "25px" }} />
                      Site Home
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-address-book"></i>
                    </span>
                    <span class="list">
                      <FaDiscourse style={{ fontSize: "25px" }} /> Courses
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-address-book"></i>
                    </span>
                    <span class="list">
                      <BiCalendarPlus style={{ fontSize: "29px" }} />
                      Calender
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-address-book"></i>
                    </span>
                    <span class="list">
                      <FaDiscourse style={{ fontSize: "25px" }} />
                      Filter Files
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-address-card"></i>
                    </span>
                    <span class="list">
                      <AiOutlineProfile style={{ fontSize: "25px" }} />
                      Profile
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-address-card"></i>
                    </span>
                    <span class="list">
                      <FcAbout
                        style={{ fontSize: "25px", textAlign: "justify" }}
                      />
                      About
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span class="icon">
                      <i class="fas fa-map-marked-alt"></i>
                    </span>
                    <span class="list"></span>
                  </a>
                </li>
              </ul>

              <div class="hamburger">
                <div class="inner_hamburger">
                  <span class="arrow">
                    <i class="fas fa-long-arrow-alt-left"></i>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <div class="row">
            <div class="col-9">
              <div class="container">
                <p>Dashboard</p>

                <div class="item_wrap">
                  <div class="item" style={{ fontWeight: "bold" }}>
                    <AiOutlineFolderView style={{ fontSize: "25px" }} />
                    View Assessment Result
                  </div>
                  <div class="item" style={{ fontWeight: "bold" }}>
                    <AiOutlineFolderView style={{ fontSize: "25px" }} />
                    View Meeting Schedule
                  </div>
                  <div
                    class="item"
                    style={{ marginLeft: "15px", fontWeight: "bold" }}
                  >
                    <AiOutlineFolderView style={{ fontSize: "25px" }} />
                    View Attendance Report
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3 ">
              <div
                class="item_wrap ml-0 "
                style={{ marginLeft: "-150px", marginTop: "100px" }}
              >
                <div
                  class="item"
                  style={{
                    marginLeft: "55px",
                    fontWeight: "bold",
                    background: "white",
                    color: "#f542a4",
                    width: "30rem",
                    height: "150px",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      color: "#f542a4",
                      textDecoration: "underline",
                      fontSize: "18px",
                    }}
                  >
                    <BiConversation />
                    Notice
                  </p>
                  <span
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    D2 Assessment is Due(Software Analysis & Design) <br />
                    <span style={{ fontSize: "16px" }}>
                      {" "}
                      Submission Date: Tuesday, 02 May 2023
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "18px",
                        textDecoration: "underline",
                        color: "blue",
                        paddingBottom: "10px",
                        marginTop: "-20px",
                      }}
                    >
                      {" "}
                      Add Submission
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-0">
            <p>My Modules</p>
            <div class="item_wrap">
              <div class="card" style={{ width: "20rem" }}>
                <img
                  src={database}
                  class="card-img-top"
                  alt="..."
                  style={{ height: "180px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Database Management System</h5>
                  <p
                    class="card-text"
                    style={{ fontSize: "13px", color: "black" }}
                  >
                    A database management system (or DBMS) is essentially
                    nothing more than a computerized.....
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: "20rem", marginLeft: "10px" }}>
                <img
                  src={software}
                  class="card-img-top"
                  alt="..."
                  style={{ height: "180px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Software Analysis and Design</h5>
                  <p
                    class="card-text"
                    style={{ fontSize: "13px", color: "black" }}
                  >
                    Software analysis and design includes all activities, which
                    help the transformation of requirement specification into
                    implementation.
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: "20rem", marginLeft: "10px" }}>
                <img
                  src={artificial}
                  class="card-img-top"
                  style={{ height: "180px" }}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Artificial Inteligence</h5>
                  <p
                    class="card-text"
                    style={{ fontSize: "13px", color: "black" }}
                  >
                    Artificial intelligence is the simulation of human
                    intelligence processes by machines, especially computer
                    systems....
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: "20rem", marginLeft: "10px" }}>
                <img
                  src={algorithm}
                  class="card-img-top"
                  style={{ height: "180px" }}
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Data structure and algorithms</h5>
                  <p
                    class="card-text"
                    style={{ fontSize: "13px", color: "black" }}
                  >
                    Data structure and algorithms is a branch of computer
                    science that deals with creating machine-efficient and
                    optimized computer programs..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
