import "./admin.css";
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

function Admin() {
  function manageRole() {
    return (
      <>
        <div class="card" style={{ width: "500px" }}>
          <div class="card-body">
            <h5
              class="card-title p-2"
              style={{
                background: "#f542a4",
                color: "white",
                marginTop: "-15px",
              }}
            >
              Manage Role
            </h5>
            <div
              class="dropdown-menus "
              style={{ width: "200px", marginLeft: "270px" }}
            >
              <a class="dropdown-item" href="#">
                Select User
              </a>
              <a class="dropdown-item" href="#">
                Student
              </a>
              <a class="dropdown-item active" href="#">
                Lecturer
              </a>
              <a class="dropdown-item" href="#">
                Admin
              </a>
            </div>
            <ul class="unstyled centered" style={{ textAlign: "justify" }}>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-1">Asssign All Menu</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-1">Add Lecturer Material</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-2"
                  type="checkbox"
                  value="value2"
                  checked
                />
                <label for="styled-checkbox-2">Add Assignment</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-3"
                  type="checkbox"
                  value="value3"
                  checked
                />
                <label for="styled-checkbox-3">Create Meeting</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">
                  Create Online Quiz and Test
                </label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">View Grade</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">View Assignment</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">Invite in Meeting</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">View All Reports</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">Assign Modules</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">Answer Queries</label>
              </li>
              <li>
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value4"
                />
                <label for="styled-checkbox-4">Ask Queries</label>
              </li>
            </ul>
          </div>
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
                  You are logged in as Admin
                </p>
              </a>
            </div>
            <div class="right_info">
              <div class="icon_wrap">
                <div class="icon">Good Morning, Admin_Name</div>
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
                      &nbsp;Manage Users
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
                      &nbsp;Manage Courses
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
                      &nbsp;Manage Modules
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
                      &nbsp;configuration
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
                      &nbsp;Generate Report
                    </span>
                  </a>
                </li>
                <li>
                  <li>
                    <a href="#">
                      <span class="icon">
                        <i class="fas fa-address-book"></i>
                      </span>
                      <span class="list">
                        <FaDiscourse style={{ fontSize: "25px" }} />
                        &nbsp;Backup
                      </span>
                    </a>
                  </li>
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
            <p>Admin/Dashboard </p>

            <div class="item_wrap">
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Manage Course and Modules
              </div>
              &nbsp;
              <div
                class="item"
                style={{ fontWeight: "bold", marginLeft: "-20px" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Monitor System Performance
              </div>
              &nbsp;
              <div
                class="item"
                style={{ fontWeight: "bold", background: "blue" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Manage User and Roles
              </div>
              &nbsp;
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; View Generated Reports
              </div>
              &nbsp; &nbsp;
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Updates and Backup
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                {manageRole()}
                {/* <p>User List</p>
                <div class="table-responsive" style={{ marginTop: "-10px" }}>
                  <table class="table table-bordered">
                    <thead>
                      <tr style={{ background: "#f542a4", color: "white" }}>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Course</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ background: "white" }}>
                      <tr>
                        <th scope="row">1</th>

                        <td>Student 1</td>
                        <td>Business</td>

                        <td>Student</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>

                        <td>Student 2</td>
                        <td>Computer Science</td>
                        <td>Student</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>

                        <td>Teacher 1</td>
                        <td>Computer Science</td>
                        <td>Teacher</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>

                        <td>Admin 1</td>
                        <td>All</td>
                        <td>Admin</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>

                        <td>Jack</td>
                        <td>Medical</td>
                        <td>Student</td>
                        <td>
                          <a class="" style={{ color: "blue" }}>
                            View Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>*/}
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
                        height: "240px",
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
                        &nbsp; View Logs
                      </p>
                      <span style={{ fontSize: "16px", color: "black" }}>
                        updates running &nbsp;
                        <span style={{ color: "grey", fontSize: "12px" }}>
                          20 min left
                        </span>
                        <br />
                      </span>
                      <span style={{ fontSize: "16px", color: "black" }}>
                        Teacher answered Questions &nbsp;
                        <span style={{ color: "grey", fontSize: "12px" }}>
                          2 hours ago
                        </span>
                        <br />
                      </span>
                      <span
                        style={{
                          textAlign: "left",
                          color: "black",
                          fontSize: "15px",
                        }}
                      >
                        Studnent 1 uploaded Assignment &nbsp;
                        <span style={{ color: "grey", fontSize: "12px" }}>
                          15 min ago
                        </span>
                        <br />
                        <span style={{ fontSize: "16px" }}>
                          Teacher1 answered Questions &nbsp;
                          <span style={{ color: "grey", fontSize: "12px" }}>
                            2 hours ago
                          </span>
                        </span>
                        <br />
                        <span style={{ fontSize: "16px" }}>
                          Data backup completed&nbsp;
                          <span style={{ color: "grey", fontSize: "12px" }}>
                            11 hours ago
                          </span>
                        </span>
                      </span>
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          fontSize: "18px",
                          textDecoration: "underline",
                          color: "#f542a4",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
