import "./login.css";
import bcu from "./bcu.jpg";
function Login_Page() {
  return (
    <>
      <div class="container-fluid">
        <div class="row main-content bg-success text-center  ">
          <div class="col-md-4 text-center company__info">
            <span class="company__logo">
              <h2>
                <span class="fa fa-android"></span>
              </h2>
            </span>
            <h4 class="company_title">
              {" "}
              <img
                src={bcu}
                style={{ height: "40px", borderRadius: "50%" }}
                alt="Avatar"
                rounded
              />
              <h2 style={{ color: "white", fontSize: "20px" }}>
                E-Learning Management System
              </h2>
            </h4>
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <div class="row">
                <div></div>
                <div class="mt-4">
                  <h3 style={{ color: "#f542a4" }}>Log In</h3>
                </div>
              </div>
              <div class="row">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div class="row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form__input"
                      placeholder="Password"
                    />
                  </div>

                  <div class="row">
                    <input
                      type="submit"
                      value="Submit"
                      class="btn"
                      style={{ width: "20rem" }}
                    />
                  </div>
                </form>
              </div>
              <div class="row">
                <p style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  <a href="#" style={{ color: "blue", textAlign: "center" }}>
                    Forget Password
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login_Page;
