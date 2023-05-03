import "./teacher.css";
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
import bcu from "./bcu.jpg";
import { useEffect } from "react";
import $ from "jquery";
function Teacher() {
  function form() {
    return (
      <>
        <div>
          <form class="p-2" style={{ background: "white" }}>
            <div class="pt-1" style={{ textAlign: "center" }}>
              <h4>Add Assignment</h4>
            </div>
            <div class="row mt-3">
              <div class=" col-md-6 ">
                <div class="dropdown-menus">
                  <a class="dropdown-item" href="#">
                    Select Courses
                  </a>
                  <a class="dropdown-item" href="#">
                    Business Management
                  </a>
                  <a class="dropdown-item active" href="#">
                    Computer Science
                  </a>
                  <a class="dropdown-item" href="#">
                    Medical
                  </a>
                  <a class="dropdown-item" href="#">
                    Engineering
                  </a>
                </div>
              </div>
              <div class=" col-md-6 ">
                <div class="dropdown-menus">
                  <a class="dropdown-item" href="#">
                    Select Modules
                  </a>
                  <a class="dropdown-item" href="#">
                    Database
                  </a>
                  <a class="dropdown-item active" href="#">
                    Software Development
                  </a>
                  <a class="dropdown-item " href="#">
                    Artificial Inteligence
                  </a>
                  <a class="dropdown-item" href="#">
                    Software Analysis and Design
                  </a>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="form-group col-md-6" style={{ marginTop: "150px" }}>
                <label
                  for="inputEmail4"
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Name of Assignment
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="form-group  col-6">
                <form>
                  <label
                    style={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "bold",
                      marginTop: "180px",
                    }}
                  >
                    Upload File &nbsp;
                  </label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </form>
              </div>
              {/* <div class="form-group col-6" style={{ marginTop: "10px" }}>
                <label
                  for="exampleFormControlTextarea1"
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  DeadLine of Assignment
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div> */}
              <div class="form-group col-6 mt-3" style={{ marginTop: "10px" }}>
                <label
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "-200px",
                  }}
                >
                  Select DeadLine
                </label>
                <div class="calendar mt-2 ">
                  <div class="header">
                    <button class="prev"></button>
                    <div class="month-year">
                      <span class="month">May</span>
                      <span class="year">2023</span>
                    </div>
                    <button class="next"></button>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="prev-month">26</td>
                        <td class="prev-month">27</td>
                        <td class="prev-month">28</td>
                        <td class="prev-month">29</td>
                        <td class="prev-month">30</td>
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>31</td>
                        <td class="next-month">1</td>
                        <td class="next-month">2</td>
                        <td class="next-month">3</td>
                        <td class="next-month">4</td>
                        <td class="next-month">5</td>
                        <td class="next-month">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="form-group  col-6 " style={{ marginTop: "300px" }}>
                <button class="btn " style={{ background: "#f542a4" }}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

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
                  You are logged in as Teacher
                </p>
              </a>
            </div>
            <div class="right_info">
              <div class="icon_wrap">
                <div class="icon">Good Morning, Teacher_Name</div>
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
                      &nbsp;Dashboard
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
                      &nbsp;Modules
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
                      &nbsp;Resources
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
                      &nbsp;Assessment
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
                      &nbsp;Assignment
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
                      &nbsp;Grades
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
                      &nbsp;Report
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
                      &nbsp;Profile
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
                      &nbsp;About
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

          <div class="container">
            <p>Teacher/Dashboard</p>

            <div class="item_wrap">
              <div
                class="item"
                style={{ fontWeight: "bold", background: "blue" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Add Lecturer Materials
              </div>
              &nbsp;
              <div
                class="item"
                style={{
                  fontWeight: "bold",
                  marginLeft: "-20px",
                }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Add Assignment
              </div>
              &nbsp;
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Create Meeting
              </div>
              &nbsp;
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Create Attend Online Quiz and Test
              </div>
              &nbsp; &nbsp;
            </div>
            <div class="item_wrap">
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; View Assignment
              </div>
              <div
                class="item"
                style={{ fontWeight: "bold", marginLeft: "-20px" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Prepare Grade Sheet
              </div>
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; View Student Report
              </div>
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Check And Answer Queries
              </div>
            </div>
            {/* //call form function */}
            {form()}

            {/* <div class="row">
              <div class="col-6">
                <p>Assignment Submitted List</p>
                <div class="table-responsive" style={{ marginTop: "-10px" }}>
                  <table class="table table-bordered">
                    <thead>
                      <tr style={{ background: "#f542a4", color: "white" }}>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Course</th>
                        <th scope="col">File</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ background: "white" }}>
                      <tr>
                        <th scope="row">1</th>

                        <td>Parash Giri</td>
                        <td>Computer Science</td>

                        <td>Submitted</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            Assignment <br />
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>

                        <td>Nishant Singh</td>
                        <td>Computer Science</td>
                        <td>Submitted</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            Assignment <br />
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>

                        <td>Mic Tyson</td>
                        <td>Computer Science</td>
                        <td>Submitted</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            Assignment <br />
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>

                        <td>Sanjay Gaur</td>
                        <td>Computer Science</td>
                        <td>Submitted</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            Assignment <br />
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>

                        <td>Jackie chain</td>
                        <td>Computer Science</td>
                        <td>Submitted</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            Assignment <br />
                            View Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-6 mt-4 ">
                <div>
                  <div
                    class="item_wrap ml-0  "
                    style={{
                      overflowY: "scroll",
                      marginTop: "27px",
                    }}
                  >
                    <div
                      class="item"
                      style={{
                        marginLeft: "55px",
                        fontWeight: "bold",
                        background: "white",
                        color: "#f542a4",
                        width: "30rem",
                        height: "360px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          color: "#f542a4",
                          textDecoration: "underline",
                          fontSize: "20px",
                          marginTop: "20px",
                        }}
                      >
                        <BiConversation />
                        &nbsp; Recently Activity
                      </p>
                      <span
                        style={{
                          textAlign: "left",
                          color: "black",
                          fontSize: "15px",
                        }}
                      >
                        Parash uploaded Assignment &nbsp;
                        <span style={{ color: "grey", fontSize: "12px" }}>
                          15 min ago
                        </span>
                        <br />
                        <span style={{ fontSize: "16px" }}>
                          Sanjay asked Questions &nbsp;
                          <span style={{ color: "grey", fontSize: "12px" }}>
                            2 hours ago
                          </span>
                        </span>
                        <br />
                      </span>
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "18px",
                          textDecoration: "underline",
                          color: "#f542a4",
                        }}
                      >
                        <span
                          style={{
                            textAlign: "left",

                            fontSize: "18px",
                            textDecoration: "underline",
                            color: "#f542a4",
                          }}
                        >
                          -Performance Report <br /> <br />
                          <span
                            style={{
                              textAlign: "left",

                              fontSize: "18px",
                              color: "#f542a4",
                            }}
                          >
                            {" "}
                            -Submission Report
                          </span>
                          <span
                            style={{
                              textAlign: "left",

                              fontSize: "18px",
                              textDecoration: "underline",
                              color: "#f542a4",
                            }}
                          >
                            {" "}
                            <br /> <br /> -Grade Report
                          </span>
                          <br /> <br />
                          <span
                            style={{
                              textAlign: "left",
                              color: "black",
                              fontSize: "18px",
                              textDecoration: "underline",
                              color: "#f542a4",
                            }}
                          >
                            {" "}
                            -Activity Report
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
