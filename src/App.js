import logo from "./logo.svg";
import "./App.scss";
// import sideImage from "../public/";

function App() {
  return (
    <div className="App">
      <div className="sideContainer">
        <img src="/thumbnail_Sideimage.jpg" alt="" className="logo" />
      </div>
      <main className="signupContainer">
        <img src="/thumbnail_Logo.png" alt="" />
        <form action="">
          <div className="emailContainer">
            <label htmlFor="" className="emailLabel">
              Email
            </label>
            <input type="text" />
          </div>
          <div className="passwordLabelContainer">
            <label htmlFor="" className="passwordLabel">
              Password
            </label>
            <label htmlFor="" className="forgotPasswordLabel">
              Forgot Password?
            </label>
          </div>
          <input type="password" />
          <button className="login">
            <span>Login</span>
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
