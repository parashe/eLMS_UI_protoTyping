import "./module.css";
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

function Module() {
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
                      &nbsp;General
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
            <p>Dashboard/ My Module</p>

            <div class="item_wrap">
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Attend Meeting
              </div>
              <div class="item" style={{ fontWeight: "bold" }}>
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Upload Assignment
              </div>
              <div
                class="item"
                style={{ marginLeft: "15px", fontWeight: "bold" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Attend Online Quiz and Test
              </div>
              <div
                class="item"
                style={{ marginLeft: "15px", fontWeight: "bold" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Visit Discussion Forum
              </div>
              <div
                class="item"
                style={{ marginLeft: "15px", fontWeight: "bold" }}
              >
                <AiOutlineFolderView style={{ fontSize: "25px" }} />
                &nbsp; Ask Queries
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <p>Resources</p>
                <div
                  class="item"
                  style={{
                    fontWeight: "bold",
                    background: "white",
                    textAlign: "justify",
                    padding: "20px",
                    width: "40rem",
                  }}
                >
                  <AiOutlineFolderView style={{ fontSize: "25px" }} />
                  &nbsp;
                  <span style={{ fontSize: "18px" }}> Assessment</span>
                </div>

                <div
                  class="item mt-1"
                  style={{
                    fontWeight: "bold",
                    background: "white",
                    textAlign: "justify",
                    padding: "20px",
                    width: "40rem",
                  }}
                >
                  <AiOutlineFolderView style={{ fontSize: "25px" }} />
                  &nbsp;
                  <span style={{ fontSize: "18px" }}> Week 1 lecture</span>
                </div>
                <div
                  class="item mt-1"
                  style={{
                    fontWeight: "bold",
                    background: "white",
                    textAlign: "justify",
                    padding: "20px",
                    width: "40rem",
                  }}
                >
                  <AiOutlineFolderView style={{ fontSize: "25px" }} />
                  &nbsp;
                  <span style={{ fontSize: "18px" }}> Week 2 lecture</span>
                </div>
                <div
                  class="item mt-1"
                  style={{
                    fontWeight: "bold",
                    background: "white",
                    textAlign: "justify",
                    padding: "20px",
                    width: "40rem",
                  }}
                >
                  <AiOutlineFolderView style={{ fontSize: "25px" }} />
                  &nbsp;
                  <span style={{ fontSize: "18px" }}> Week 3 lecture</span>
                </div>
                <div
                  class="item mt-1"
                  style={{
                    fontWeight: "bold",
                    background: "white",
                    textAlign: "justify",
                    padding: "20px",
                    width: "40rem",
                  }}
                >
                  <AiOutlineFolderView style={{ fontSize: "25px" }} />
                  &nbsp;
                  <span style={{ fontSize: "18px" }}>Week 4 lecture</span>
                </div>
                <div
                  class="item mt-1"
                  style={{
                    fontWeight: "bold",
                    background: "white",
                    textAlign: "justify",
                    padding: "20px",
                    width: "40rem",
                  }}
                >
                  <AiOutlineFolderView style={{ fontSize: "25px" }} />
                  &nbsp;
                  <span style={{ fontSize: "18px" }}>Week 5 lecture</span>
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
                        height: "440px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          color: "#f542a4",
                          textDecoration: "underline",
                          fontSize: "20px",
                        }}
                      >
                        <BiConversation />
                        &nbsp; Download Resources
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          color: "#f542a4",
                          textDecoration: "underline",
                          fontSize: "20px",
                        }}
                      >
                        <BiConversation />
                        &nbsp; Upcoming Events
                      </p>
                      <span
                        style={{
                          textAlign: "left",
                          color: "black",
                          fontSize: "18px",
                        }}
                      >
                        D2 Assessment is Due <br />
                        <span style={{ fontSize: "16px" }}>
                          {" "}
                          Submission Date:Tuesday 2/04/2023
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
                          fontSize: "17px",
                          textDecoration: "underline",
                          color: "#f542a4",
                        }}
                      >
                        -Performance Report <br /> <br />
                        <span
                          style={{
                            textAlign: "left",
                            color: "black",
                            fontSize: "17px",
                            color: "#f542a4",
                          }}
                        >
                          {" "}
                          -Submission Report
                        </span>
                        <span
                          style={{
                            textAlign: "left",
                            color: "black",
                            fontSize: "17px",
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
                            fontSize: "17px",
                            textDecoration: "underline",
                            color: "#f542a4",
                          }}
                        >
                          {" "}
                          -Activity Report
                        </span>
                      </span>
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

export default Module;
