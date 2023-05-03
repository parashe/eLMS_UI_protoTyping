import logo from "./logo.svg";
import "./App.css";
import Student from "./Studentpage/studentpage";
import Module from "./module/module";
import Teacher from "./Teacher/teacher";
import Admin from "./admin/admin";

import Login_Page from "./login/login";

function App() {
  return (
    <div className="App">
      {/* <Student/> */}
      {/* <Module /> */}
      {/* <Teacher /> */}
      {/* <Admin /> */}
      <Login_Page />
    </div>
  );
}

export default App;
