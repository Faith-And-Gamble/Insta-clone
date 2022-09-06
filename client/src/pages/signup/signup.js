import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./signup.css";
// import { Main } from "./signup.style";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit() {
    console.log(form);
  }

  return (
    <div>
      <main>
        <div className="page">
          <div className="header">
            {/* Logo */}
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              alt="Instagram"
            />
            {/* First Container */}
            <p>Sign up to see photos and videos from your friends.</p>
            <button>
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <FaFacebookSquare />
              </IconContext.Provider>
              Log in with Facebook
            </button>
            <div>
              <hr />
              <p>OR</p>
              <hr />
            </div>
          </div>
          {/* Second Container */}
          <div className="container">
            <form action="/">
              <input
                name="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                id="email"
                placeholder="Mobile Number or Email"
              />
              <input
                name="fullname"
                type="text"
                value={form.fullname}
                onChange={handleChange}
                id="fullname"
                placeholder="Full Name"
              />
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                id="username"
                placeholder="Username"
              />
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                id="password"
                placeholder="Password"
              />
            </form>

            <footer>
              <p>
                By signing up, you agree to our{" "}
                <a href="https://help.instagram.com/581066165581870">
                  Terms , Privacy Policy{" "}
                </a>{" "}
                and{" "}
                <a href="https://help.instagram.com/1896641480634370?ref=ig">
                  Cookies Policy
                </a>{" "}
                .
              </p>
            </footer>
            <button onClick={() => handleSubmit()}>Sign up</button>
          </div>
        </div>

        {/* Third Container */}
        <div className="ThirdContainer">
          <p>
            Have an account? <a href="/">Log in</a>
          </p>
        </div>

        {/* Fourth Container */}
        <div className="FourthContainer">
          <p>Get the app.</p>
          <a href="https://apps.apple.com/in/app/instagram/id389801252"><img
            src="https://i.postimg.cc/Vkm7D9Xd/appstore.png"
            alt="appstore"
          /></a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US"><img
            src="https://i.postimg.cc/R00gzMsm/playstore.png"
            alt="playstore"
          /></a>
          
        </div>

        {/* Fifith Container */}
        <div className="FifthContainer">
          <div class="links">
            <a href="/">Meta</a>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Job</a>
            <a href="/">Help</a>
            <a href="/">API</a>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Top Accounts</a>
            <a href="/">Hashtags</a>
            <a href="/">Locations</a>
            <a href="/">Instagram Lite</a>
            <a href="/">Contact Uploading & Non-Users</a>
            <div class="copyright">
              <p>&copy; 2022 Instagram From Meta</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
