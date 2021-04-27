import "./App.scss";
// import sideImage from "./images/thumbnail_Sideimage.jpg";

function App() {
  return (
    <div className="App">
      <div className="sideContainer">
        <img
          src={process.env.PUBLIC_URL + "/thumbnail_Sideimage.jpg"}
          alt=""
          className="logo"
        />
      </div>
      <main className="signupContainer">
        <img src={process.env.PUBLIC_URL + "/thumbnail_Logo.png"} alt="" />
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
